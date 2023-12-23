
     var Layout = ss('.Layout'); // layout in tollbar
     
       var card_user = ss('.card_user'); 
       

var koli = {getValue : function(){return "GURJAR"}}  //*****************  Please  KOLi SET editoer VALUE



  function getSession(name){return window.sessionStorage.getItem(name)}
  function setSession(name,value){ window.sessionStorage.setItem(name,value)}
  
card_user.querySelector('.model') .onscroll = function(){
   card_user.querySelector('.close').style.cssText = `transform: translate(0, ${this.scrollTop}px)`;
   card_user.querySelector('h4').style.cssText = `transform: translate(0, ${this.scrollTop}px)`;
}
 function card_wating_animate()  {
     
     card_user.querySelector(".wating").style.display = "inline-block"
   setInterval(function(){
     var animate=  card_user.querySelector(".wating"); 
       if(animate.textContent === "Progressing>>>"){
         animate.innerHTML = "<dt style='color:blue'>Facting...</dt>"  
       }else if (animate.textContent === "Facting..."){
           animate.innerHTML = "<dt style='color:green'>Data..</dt>"  
       } else if (animate.textContent === "Data.."){ 
            animate.innerHTML = "<dt style='color:red'>Progressing>>></dt>" 
       }else {
           animate.innerHTML = "<dt style='color:red'>Progressing>>></dt>"  
       }
     },600) 
 }

function card_status(display,text = null) {
    card_user.querySelector('.status').style.display = display;
    card_user.querySelector('.status').textContent = text;
}

function card_closeB(dispaly){  
    card_user.querySelector(".close").classList.remove("theme_dark_background");
    card_user.querySelector(".close").style.display = dispaly
   
}
function card_button(self,display){
    self.style.display =  display; 
}


function card_mod(type,title){
    card_user.querySelector('h4').innerHTML = title;
    card_user.querySelectorAll('.sect').forEach(function(s){ s.style.display = "none"});
     card_user.querySelector('[type='+type+']').style.display = "block";
    card_user.querySelectorAll('.status').forEach(function(st){st.style.display = "none"});
   card_user.querySelector('.wating').style.display = "none"
   card_user.style.display = "block"
     card_user.querySelector('.select').value = 0;
     ss('.Passcode').style.display = "none"
      ss('.Passcode').value = null;
  card_user.querySelector(".close").onclick = function (){
         card_user.style.display = "none"
  }
 if(type == 'live') {
       let pass = true,Pass_code = 0,type = 0;
       card_user.querySelector('.select').oninput = function (){
          let v = this.value,when =  ss('.info_view');
             type = v;
             
             if(v == '2'){
             ss('.Passcode').style.display = "block"
             pass = false;
              card_user.querySelector('[type="pass"]').value = null;
            when.innerHTML = "<a href='/'>Passcode ? </a>"
    card_user.querySelector('[type="pass"]').oninput  = function (){ 
          card_status("none")
            if(!(this.value.match(/^\s*(\d+)\s*$/g) == null) &&this.value.length  == 6){
               this.style.cssText +="border-left-color:rgba(255, 31, 244, 1)"
                card_user.querySelector('.mini_status') .style.display ="none";
                 pass = true;
                 Pass_code = this.value;
             }else {
              card_user.querySelector('.mini_status') .style.display ="block";
                this.style.cssText +="border-left-color:red"
                pass = false; 
             }
            }
             }else {
                 ss('.Passcode').style.display = "none"
                   pass = true; 
             }
             
             if(v == '0'){ 
                when.innerHTML = '<a href="/">public ? </a>';
             }else if (v == '1'){ 
                   when.innerHTML = '<a href="/">Private? </a>';
             }
         
       } 
       
  
     
     card_user.querySelector('[type="GOLIVE"]') .onclick = function (){
          let  self  = this;
          
        if(pass){
        http2.get('/@ATTR_REQUEST@',{type:"create_live",pub:type,passcode:Pass_code},"json")
        .wait(function(){
            card_wating_animate()
            card_button(self,"none")
            card_closeB("none") 
        })
         .done(function(req){       
             if(req.status == 200){
                   card_button(self,"inline-block")
                    card_status("none")
                    card_closeB("block")
                card_user.querySelector('.wating').style.display = "none"
               
                setSession('INSIDE_LIVEID',req.data[0]);
               setSession('INSIDE_LIVE_public', type);
             setSession('INSIDE_LIVEUSER',req.data[1])
             ISLIVE(0)
             card_mod('lived','You Live  Now <a href="end">?</a>') 
             } else if(req.status == 300){  
                    card_status("block","someting  worng") 
                    card_closeB("block")
                    card_user.querySelector('.wating').style.display = "none"
             }
         }).error(function(){card_button(self,"inline-block");card_status("block","Not  Intertnt Connection | other Probalem"); card_user.querySelector('.wating').style.display = "none";card_closeB("block") });
        }else { 
           card_status("block","someting  worng") 
        }
    }
   
      
  
     
 }else if(type == "lived"){ 
      let live_url =  card_user.querySelector('.live_url a'),url = "https://js.kboy.xyz/@l/"+getSession('INSIDE_LIVEUSER')+"/"+getSession('INSIDE_LIVEID');
       live_url .textContent =  "js.kboy.xyz/@l/"+getSession('INSIDE_LIVEUSER')+"/"+getSession('INSIDE_LIVEID');
       live_url.href  = url;
      card_user.querySelector(".hover_svg") .onclick = function (){
         let b = navigator.clipboard;
          if(typeof b.writeText == 'function' ){ 
               b.writeText(live_url.href); 
             
          }else {  
             b.write(live_url.href);
          }
      } //
    card_user.querySelector('[ type="ENDLIVE"]').onclick = function() {
        let self = this;
        http2.get('/@ATTR_REQUEST@',{type:"end_live",id:getSession('INSIDE_LIVEID')},"json")
        .wait(function(){
            card_wating_animate()
            card_button(self,"none")
            card_closeB("none")
        })
        .done(function(req){
           
             if(req.status == 200){ 
                 setSession('INSIDE_LIVEUSER',null);
                 setSession('INSIDE_LIVEID',null); 
                 setSession('INSIDE_LIVE_public', null);
                 card_user.querySelector(".st_endliv").style.display = "none";
                card_button(self,"inline-block")
                 card_closeB("block");
                 ISLIVE(1);
                 card_user.style.display = "none";
             }else if(req.status == 300){ 
                 card_user.querySelector(".st_endliv").style.display = "inline-block"
                 card_user.querySelector(".st_endliv").textContent = "someting Wrong";
                 card_button(self,"inline-block")
               card_closeB("block")
             }
        }).error(function(){card_button(self,"inline-block"); card_user.querySelector(".st_endliv").style.display = "inline-block"
                 card_user.querySelector(".st_endliv").textContent = "Not  Intertnt Connection | other Probalem"; card_user.querySelector('.wating').style.display = "none" });
    } 
      
  }
  
  
  else if( type == "color") { 
      
  }
    
} 
 

 function nullSession_Live(){
 if((getSession('INSIDE_LIVEID') == "null") || (getSession('INSIDE_LIVEID') == null)){
     return false;
     }else {
         return true;
     }
 
 
   
 } 
 
//card_mod("lived",'Start Live<a href="end">?</a>'); 
ss('[action="live"]').onclick = function (){
  if(nullSession_Live() == true){
       card_mod("lived",'END Live<a href="end">?</a>')
  }else {   
     card_mod("live",'Start Live<a href="end">?</a>');
  }
}  
 
  


let now_LIVEIS = null,noe_LIVESGV_enamte = null,now_LIVEIS_Count = null; 

 let end_live_section  = false,call_back = true,live_isoffline = false,call_back2 = true; 
setInterval(function(){  // invalid  liveid
 if(nullSession_Live() == true) {
       http2.get('/@ATTR_REQUEST@',{type:"end_Sessionlive",id:getSession('INSIDE_LIVEID')},"json")
    .done(function(req){
       if(req.status == 300){
           if(end_live_section == false){ 
               end_live_section = true;
            setSession('INSIDE_LIVEUSER',null);
            setSession('INSIDE_LIVEID',null); 
            alert("Live  is End")
            ISLIVE(1)
             call_back = true;
             call_back2 = true;
           }
       }
    });
    if(!navigator.onLine){  // when offline
    if( end_live_section == false){
            end_live_section = true;
            live_isoffline = true;
           // setSession('INSIDE_LIVEUSER',null);
            //setSession('INSIDE_LIVEID',null); 
            alert("Live  is End Your  Offline Now")
            ISLIVE(1) 
              call_back = true;
              call_back2 = true;
         } 
    }
    if(live_isoffline ==  true){ //when back online
        if(navigator.onLine){
             alert("online  Now  back Live ")
            live_isoffline  = false;
             ISLIVE(0) 
             call_back = true;
             call_back2 = true;
        }
    }
  }    
},700);
 
 
 function ISLIVE(type){
     
  if(type == 0){
       end_live_section  = false;
      
       if(getSession('INSIDE_LIVE_public') == "1"){
            Layout.querySelector('.lock').style.display = "block";
            Layout.querySelector('.views').style.display = "none";
       }else {
            Layout.querySelector('.lock').style.display = "none";
            Layout.querySelector('.views').style.display = "block";
            let  views_l = Layout.querySelector('.views');
          now_LIVEIS_Count =   setInterval(function(){
                 if(call_back2){
                     call_back2 =false;
                http2.get('/@ATTR_REQUEST@',{type:"live_count",id:getSession('INSIDE_LIVEID')},"json") 
                .done(function(r){
                    if(r.status  == 200){
                       call_back2 = true; 
                       views_l.textContent = r.count
                    }else if( r.status  == 300){
                         call_back2 = true;
                         views_l.textContent = 0;
                    }  
                })    
    
                 }
            })
            //end  LIVE  COUNT
       }
          
        now_LIVEIS  =    setInterval(function(){  
        if(call_back){
             call_back = false; 
       http2.post('/@LIVE@',JSON.stringify({type:'code',code:koli.getValue().toString(),id:getSession('INSIDE_LIVEID')}),'json','application/json') 
       .done(function(req){
          if(req.status == 200){
             call_back = true;   
          }
       })
        }
     });  
     
   noe_LIVESGV_enamte  =    setInterval(function(){
     all('[live_patsvg="animte"]').forEach(function(f){
         f.style.fill == 'red'?f.style.fill = 'gray':f.style.fill = 'red';
     }) 
 
     },900); 
      
 
        
  } 
       
else  if(type == 1){ //start
    clearInterval(now_LIVEIS) 
     clearInterval(noe_LIVESGV_enamte)
     clearInterval(now_LIVEIS_Count);
    Layout.querySelectorAll('.child_live').forEach(function(el){
         el.style.display = "none";
     });
   }     
} 
setInterval(function(){
    if(!nullSession_Live()){
    Layout.querySelector('.LIVE_SEC').querySelector('circle').fill = "gray"
     if(localStorage.getItem("THEME_MODE") == "dark"){
     Layout.querySelector('.LIVE_SEC').querySelectorAll('path').forEach(function(r){ r.style.fill = "pink"})
      Layout.querySelector('.LIVE_SEC').querySelector('circle').fill = "gray"
     
     }else {
          Layout.querySelector('.LIVE_SEC').querySelectorAll('path').forEach(function(r){ r.style.fill = "rgba(38, 38, 38, 1)"})
    }
 }
})
 

nullSession_Live() == true?ISLIVE(0):null; //back session start LIve;  
 

