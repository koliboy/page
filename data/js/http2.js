   /*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */
Object.defineProperty(this,"http2",{value:{
    worker__: function (type,request,data,responseType,header){
      var http_data =  JSON.stringify(data);
      xhr_http = new XMLHttpRequest();
      
      if(responseType){
           xhr_http.responseType =  responseType;
           
      }
       if(type == 'POST'){
           xhr_http.open(type,request,true);
       }else {
          xhr_http.open(type,request+'?http2='+http_data,true); 
       }
      if(header){
          xhr_http.setRequestHeader('Content-type',header)
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
                    if (this.status === 200){
                      if(prossing_status == true){
                           func.call(this.response,this.response,this)
                           prossing_status= false
                      }  
                    }
                }
           });
            return data_return ;
         },//done
         error:function(func){
             connect.addEventListener('loadend',function(){
                if(!(this.status == 200)){
                    if(prossing_status == true){
                        prossing_status = false;
                        func();
                    }
                } 
             });
            return data_return;
         },//error
         setTime:function(time){
             this.overTime = time; 
            return data_return;
         },//setTime
         timeOut:function(func){
             let stem =0; end_prossing = this.overTime; var status = 0;
             setInterval(function(){
                 stem++;
                  status = connect.status;
                  if(stem == end_prossing){
                      if(!(status == 200 && prossing_status == false)){
                           func();
                           prossing_status = false;  
                      }
                  }
             });
             return data_return;
         } //timeOut
     }//data_return
     
     type == 'POST'?connect.send(data):connect.send(null);
     return  data_return;
    },//end  worker__
    
    
    get:function(request,data,responseType){
         var connect =  this.worker__("GET",request,data,responseType,null);
          return   connect;
    },
    
    post:function(request,data,responseType,head){
        var connect =  this.worker__("POST",request,data,responseType,head);
        return   connect;
    },
    
    delete:function(request,data,responseType){
        var connect =  this.worker__("DELETE",request,data,responseType,null);
        return   connect; 
    }
 },writable: false});