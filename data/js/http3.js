Object.defineProperty(this,"http3",{value:{
    worker__: function (type,request,data,options){
      var http_data =  JSON.stringify(data);
      xhr_http = new XMLHttpRequest();
      
       if (typeof options != "object"){
           options = {}
           options.status = 200;
       }
       
       /*not status conf defulat is 200*/
       if (typeof options == "object" && options != null && !("status" in options)) {
           options.status = 200
      }
      /*responseType*/
      if (typeof options == "object" &&  options != null && "responseType" in options){
          xhr_http.responseType  = options.responseType
       }
      
       if(type == 'POST'){
           xhr_http.open(type,request,true);
       }
       
       else if(typeof data == "object" &&  data != null ) {
          var urlEncodedString_from_object = Object.keys(data).map(function(k){
         fm = ""
         if (data[k] instanceof Array){
          fm =   data[k].map(function(v){ return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`}).join('&');
         }
        else {
          fm  =  `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`
        }
      return fm
       }).join('&');
            xhr_http.open(type,request+"?"+new String(urlEncodedString_from_object),true); 
       }
       else {
           xhr_http.open(type,request,true); 
       }
       /*overrideMimeType*/
       if (typeof options == "object" &&  options != null && "overrideMimeType" in options){
        xhr_http.overrideMimeType(new String(options.overrideMimeType))
      }
       /*setRequestHeader*/
      if (typeof options == "object" &&  options != null && "headers" in options){
          if(typeof options.headers == "object" &&  options.headers != null)
          for (k of Object.keys(options.headers)){
           xhr_http.setRequestHeader(new String(k),new String(options.headers[k]))
          }
       } 
       
     var [connect,prossing_status] = [xhr_http,true];
     var data_return = {
         
         on:function (func){
            connect.addEventListener('load',func)
             return data_return;
         },//on
         wait:function (func){
             func.call();  
          return data_return; 
         }, //wait
         done:function(func){
           connect.addEventListener('loadend',function(){
                if (this.readyState === this.DONE) {
                    if (this.status === options.status){
                      if(prossing_status == true){
                           func.call(this.response,this.response,this)
                          
                      }  
                    }
                }
           });
            return data_return ;
         },//done
         error:function(func){
             connect.addEventListener('loadend',function(){
                if(!(this.status == options.status)){
                    if(prossing_status == true){
                        func();
                    }
                } 
             });
            return data_return;
         },//error
        
     }//data_return
     
     /*body*/
     if (typeof options == "object" &&  options != null && "body" in options){
            connect.send(options.body)
     }
     else {
        connect.send(null);
     }
     
     /*set time*/
     
     data_return.timeOut =function(time,fun){
       setTimeout(function(){
           if(!(connect.status == options.status)){
               if (typeof fun == "function"){
                    fun.call(connect,connect)
               }
               connect.abort(); 
           } 
       },time)
       return data_return
     }
     
     /*cancel*/
     data_return.abort = function(fun){
         if (typeof fun == "function"){ fun.call(connect,connect)}
         connect.abort(); 
         return data_return
     }
     return  data_return;
    },//end  worker__
    
     
    get:function(request,data,options){
         var connect =  this.worker__("GET",request,data,options);
          return   connect;
    },
    
    post:function(request,options){
        var connect =  this.worker__("POST",request,null,options);
        return   connect;
    },    
            
 },writable: false});
 
/*head = {
    //status : 200 //you can change response status
    // responseType : "json"  
    //overrideMimeType     
    headers:{     
        "Content-Type":"application/json"}, 
    body:JSON.stringify({extension:"test"})
}  */
 
 /*http3.get("/@ajax",{extension:"test"},head)
 .done(function(data){ 
     document.console = data
 })*/ 

/*
  http3.post("/@ajax",head)
 .done(function(data){  
     document.console = data
 })*/