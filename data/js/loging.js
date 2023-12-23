record()
   
var r_url = ss('.REQUEST_URL').getAttribute("url"); 
     
     var card_user = ss('.card_user')  
 

      mode_card('login',"LOGIN <a href=''>?</a>")


card_user.querySelector('.model') .onscroll = function(){
   card_user.querySelector('.close').style.cssText = `transform: translate(0, ${this.scrollTop}px)`;
   card_user.querySelector('h4').style.cssText = `transform: translate(0, ${this.scrollTop}px)`;
}
 function card_wating_animate()  {
     
     card_user.querySelector(".wating").style.display = "inline-block"
   setInterval(function(){
     var animate=  card_user.querySelector(".wating"); 
       if(animate.textContent === "Progressing"){
         animate.innerHTML = "<dt style='color:blue'>Facting...</dt>"  
       }else if (animate.textContent === "Facting..."){
           animate.innerHTML = "<dt style='color:green'>Data..</dt>"  
       } else if (animate.textContent === "Data.."){ 
            animate.innerHTML = "<dt style='color:rgba(255, 31, 244, 1)'>Progressing</dt>" 
       }else {
           animate.innerHTML = "<dt style='color:rgba(255, 31, 244, 1)'>Progressing</dt>"  
       }
     },900)  
 }

 

function status_card_animate(prop)  {
      card_user.querySelector(".wating").style.display = prop;
}

function status_card(prop,text = null){
       card_user.querySelector('.status').style.display  = prop;
       card_user.querySelector('.status').innerHTML = text;
}


function checking_card (el){
        el.onfocus()
        card_user.querySelector('[check'+'='+el.getAttribute('attr')+']').style.color = "red"
       el.oninput = function (){ card_user.querySelector('[check'+'='+el.getAttribute('attr')+']').style.color = "gray";
           status_card("none")
       }
}

function status_ok (button,text= null){
      button.style.display = "inline-block"; 
             status_card_animate("none"); 
             card_user.querySelector('.other_action').style.display = "flex";
             status_card('block',text);
}

 function card_minStaus(display,text,self){
    satus =  self.nextElementSibling;
      if(self.getAttribute('trid') == "ok"){  /*password*/
          this_stat = self.parentElement.querySelector('.status_mini')
           this_stat.style.color = "red"
          this_stat.style.display = display
          this_stat.textContent = text
       }else {
         satus.style.color = "red"
         satus.style.display = display
         satus.textContent = text
       }
        
     
   
 }


 
 
 function card_borderStatus(self,ok){
      if(ok){
           self.style.cssText += "border-left-color:rgba(255, 31, 244, 1);;border-left-width:3px"
      }else {
        self.style.cssText += "border-left-color:red;border-left-width:3px"  
      }
 }
var  enable_disbled_eUCheking = false;
   
 card_user.querySelector('[type="Reset"]').onclick = function () {  /*Canecel*/
      mode_card('login',"Login <a href=''>?</a>") 
 } 

function mode_card(type,title,notin) {
          card_user.querySelector('h4').innerHTML = title;
          status_card('none',null);
         
      card_user.querySelector(".other_action").querySelectorAll('a').forEach(function(display){
          if(display.getAttribute('type') == type){
             display.style.display = "none"; 
          }else { 
            display.style.display = "inline-block";  
          }
      }); 
      card_user.querySelector(".Login_action").querySelectorAll('dt').forEach(function(button){
        if(button.getAttribute('type') == type) {
            button.style.display = "block";
        } else {
            button.style.display = "none"
        }
      });
    card_user.querySelectorAll('input').forEach(function(v){ v.value = null;
        v.style.cssText +="border-left-color:gray;border-left-width:1px";
    });
    card_user.querySelectorAll('.title').forEach(function(title){ title.style.color = "gray"});
    
   card_user.querySelectorAll('input').forEach(function(a){
     a.addEventListener('input',function(as){  
         status_card('none');
     })
 }); 
  card_user.querySelectorAll('.status_mini').forEach(function(e){
      e.style.display = "none"
  }) 
 
 var calling_input = true;  
 
    if(type =='up'){ //regester
    calling_input = true;
     card_user.querySelectorAll('[attr="pass"]')[0].onkeyup = null
     card_user.querySelector('[type="up"]').querySelector('button').textContent = "Next"
      card_user.querySelector('.other_action').style.display = "flex"
      card_user.querySelector('.Pass_area').style.display = "block"
        enable_disbled_eUCheking = true; 
     card_user.querySelectorAll(".sinpup").forEach(function(self){self.style.display = "block";});
     card_user.querySelectorAll(".forget").forEach(function(self){self.style.display = "none";});
      var email  = card_user.querySelector('[check="email"]');
          email.textContent = 'Email';
         
           enable_disbled_eUCheking =true;
          card_user.querySelector('.trems').style.display = "block";
        var email_ok  = false,user_ok = false,pass_ok = false,password_ok = false,s_pin = false,full_name = false,otp_ = false;
        var location = card_user.querySelector('.country').value
         card_user.querySelector('.country').change(function(){
            location = this.value
         });
   
    // steup 1-------->
     let steup_one = false
     let singup_el = card_user.querySelectorAll('.sinpup')
     card_user.querySelector('.Pass_area').style.display = "none"
     
     Array.from(card_user.querySelectorAll('.sinpup')).forEach(function(a){
           a.style.display = "none"
         
     })
    //check email
     card_user.querySelector('[attr="email"]').oninput = function (){
       
         
              
          
           let v = this.value,self = this;
           card_minStaus('none',null,self);
            email_ok = true;
           
            if((v.includes('@')) && (v.replaceAll(/\s/g,"").length > 6) && (v.includes('.')) && !(v.match(/(^\s*\w+(\.\w+)*)@(\w+)(\.)\w+(\.\w+)*(\s)*$/g) == null ) && (v.replaceAll(/\s/g,"").length < 199)){
               card_borderStatus(self,true)
             http2.get('/@ATTR_REQUEST@',{type:"check_email",email:v.toLowerCase()},"json")
             .done(function(is){ 
                 if(is.status  == 300){ //areradey
                     card_borderStatus(self,false)
                   card_minStaus('block',"! This email is  already used",self);
                    email_ok = false;
                    steup_one = false
                    }else if(is.status  == 200){ 
                     
                    card_borderStatus(self,true)
                     email_ok = true; 
                     steup_one = true
                 }
             })
            }else {
                 card_borderStatus(self,false);
                   card_minStaus('block',"! This email is invalid.",self);
                    email_ok = false;
            
       } 
        
              
            
           
        } //end check_email
        
        
      //check user name
       var  max_length = "";
        card_user.querySelector('[attr="user"]').oninput = function () {
           
          
              let v = this.value,self = this;
              
               card_minStaus('none',null,self);
               
               
                if((v.length >= 4) && !(v.match(/^\s*(\w+)\s*$/g) == null )){
                    card_borderStatus(self,true)
                    user_ok = true;
                    if(v.length <= 16){
                      max_length = v;
                    }
                    this.value = max_length;
                   var  u_name = v.replaceAll(/\s/g,""); 
                    http2.get('/@ATTR_REQUEST@',{type:"check_user",user:u_name.toLowerCase()},"json")
                    .done(function(is){ 
                        if(is.status  == 300){ //areradey
                    card_borderStatus(self,false)
                    card_minStaus('block',"It already exists",self);
                    user_ok = false;
                   }else if(is.status  == 200){ 
                     card_borderStatus(self,true)
                     user_ok = true;
                     }
                    });
                    
                }else { 
                     card_minStaus('block'," Ony allow W OR character should be 4 or  more  than  4 do not  use these  [!@#$%^&*()+={}[]\|] more.. symboles OR  Not \w white space  \w ",self);
                      card_borderStatus(self,false)
                      user_ok = false;
                }
            
         } //end  check_user 
         
      //check password
        let carefull = false;
        var pass_element = card_user.querySelectorAll('[attr="pass"]');
         pass_element[0].oninput = function (){
              
                 var v = this.value,self = this;
                 if(carefull){
                     card_borderStatus(pass_element[1],false)
                      card_minStaus("block","This  password does not  match  the  first password",self);
                      password_ok = false;
                      pass_element[1].value = null;
                 }
                 if(!(v.match(/^([^\s]+)$/g) == null) && (v.replaceAll(/\s/g,"").length >= 8) && (v.replaceAll(/\s/g,"").length < 17)){
                     card_borderStatus(self,true)
                     card_minStaus('none',null,self) 
                     pass_ok = true;
                 }else {
                      card_minStaus('block',"Minimum  length  can be  8 or  more than 16, |there should  not  be  much whitespace in between",self);
                      card_borderStatus(self,false);
                      pass_ok = false;
                 }
              
          } //
       pass_element[1].oninput = function (){
             
                  carefull = true;
                 var v = this.value,self = this;
                  if((v === pass_element[0].value) && ( pass_ok == true)){
                        card_borderStatus(self,true)
                        card_minStaus("none",null,self)
                        password_ok = true;
                  }else {
                        card_borderStatus(self,false)
                        card_minStaus("block","This  password does not  match  the  first password",self)
                         password_ok = false;
                  }
              
          } // end  check password

 //check Session pin
   mx_lenft_pin = ""
   card_user.querySelector('[attr="spin"]').oninput = function(){
         v = this.value,self = this
              if(v.length <= 8){
                       mx_lenft_pin = v;
                    }
                this.value =  mx_lenft_pin;
          if(!(this.value.match(/^([0-9]+)$/g) == null) && this.value.length >= 6 &&  this.value.length < 9){
             card_borderStatus(this,true)
             card_minStaus("none",null,self)
             s_pin = true
            
          }else{
               card_borderStatus(this,false)
               s_pin = false
               card_minStaus("block","min_length = 6 and  only number morthan 8",self)
          }
         
        
         
       
       
   }
   
     // check full name    
     card_user.querySelector('[attr="name"]') .oninput = function ()  {
         
              var v = this.value,self = this;
             
              if((v.replaceAll(/\s/g,"").length >= 4) &&  (v.length < 61)){
                   card_borderStatus(self,true); 
                   full_name = true;
                    card_minStaus("none",null,self)
              }else {
                   card_borderStatus(self,false)
                  full_name = false;
                  card_minStaus("block"," The  name is invalid.",self)
              }
          
     } // end check full name
     
    
      //click 
      var SETUP =0, setup_opt = true
      let wait_  =  card_user.querySelector(".wating")
       card_user.querySelector('[type="up"]').onclick = function(){
            let all_ok = [true,email_ok,otp_,user_ok,pass_ok,password_ok,true,s_pin,full_name];
             
            let self = this;
            
          if(!(all_ok.includes(false))){ 
            card_user.querySelector('[type="Reset"]').style.display = "none"
           var _E =  card_user.querySelector('[attr="email"]'),U_  =  card_user.querySelector('[attr="user"]'),
           _P =  pass_element[1], N_ =  card_user.querySelector('[attr="name"]'),S_p = card_user.querySelector('[attr="spin"]');
     http2.get('/@ATTR_REQUEST@',{type:"register_new",user:U_.value,email:_E.value,pass:_P.value,name:N_.value,session_pin:S_p.value,country:location,otp:123387},"json")
           .setTime(1000000*120) //2 min
           .wait(function(){ 
          card_wating_animate();       
          self.style.display = "none"  
         card_user.querySelector('.other_action').style.display = "none"; 
          status_card("none");
          card_user.querySelector('.trems').style.display = "none";
           })  
           .done(function(req){
                
              if(req.status == 200){    
              window.location.replace('/@step2') 
               }else if(req.status == 300){
                 status_ok(self,"Something went  wrong  check the  input  you  entered | or  try  again  |or  the  help page  pops up")
              }
           })
           .error(function(){ 
               status_ok(self,"Something went  wrong  check the  input  you  entered | or  try  again  |or  the  help page  pops up")
           }) 
           .timeOut(function(){
               status_ok(self,"Time Out Try  Again")
           }); 
            
          }else {
               //status_ok(self,"Something Worng")
                   let send_bu =   card_user.querySelector('[type="up"]').querySelector('button')
                  if(!email_ok){  /*setep 1*/
                      card_borderStatus(card_user.querySelectorAll('.singUP')[0],false)
                      card_user.querySelectorAll('.singUP')[0].focus()
                  }else { 
                    
                       send_bu.textContent = "Send"
                     card_user.querySelectorAll('.sinpup')[0].style.display = "block"
                     card_user.querySelector('[type="Reset"]').style.display = "block"
                     card_user.querySelector('.trems').style.display = "none";
                     card_user.querySelector('.other_action').style.display = "none"
                       if(setup_opt){
                            SETUP +=1
                       }
                        
                      
                     if(SETUP == 2) {  /*send OTP*/
                          setup_opt = false
                          card_user.querySelectorAll('.sinpup')[0].style.display = "block"
                          test_otp_send() 
                          function test_otp_send(){
                              card_wating_animate(); 
                               card_user.querySelector('.status_otp').style.display = "none"
                              card_user.querySelector('.Login_action').style.display = "none"
                                SETUP = 2
                              setTimeout(function(){ /*when Done Data*/
                                    
                                  card_user.querySelector('[type="other"]').style.display = "block"
                                    card_user.querySelector('[type="other"]').querySelector('button').textContent = "Send"
                                  card_user.querySelector('.status_otp').textContent = "6 Number OTP mail has been sent successfully check in your inbox otherwise try again"
                                   card_user.querySelector('.status_otp').style.cssText = "display:block; color:green;"
                                   card_user.querySelector('.Login_action').style.display = "flex"
                                    send_bu.textContent = "Verify"
                                     wait_.style.display = "none"
                                     setup_opt = true 
                                    
                              },300);
                          }   /* test_otp_send()*/
                            card_user.querySelector('[type="other"]').querySelector('button').onclick = function (){  /*send again otp*/
                                test_otp_send()
                                setup_opt = false;  SETUP = 2; /*back SETUP*/
                            }
                     }
                   
                   
                    else if(SETUP == 3) {  /*verfy otp*/
                        setup_opt = false
                         card_user.querySelector('.status_otp').style.display = "none"
                         card_user.querySelector('.Login_action').style.display = "none"
                         card_wating_animate(); 
                          setTimeout(function(){ /*when Done Data*/ 
                               card_user.querySelector('[type="other"]').style.display = "none"
                                 card_user.querySelector('.Login_action').style.display = "flex"
                              send_bu.textContent = "Register"
                               wait_.style.display = "none"
                                card_user.querySelectorAll('.sinpup')[0].style.display = "none"
                                //setup_opt = true
                                otp_ = true
                                SETUP = 4;
                                send_bu.click()
                          });
                          /* When failure*/
                          // setup_opt = false;  SETUP = 2;
                           //send_bu.click()
                    } 
                    else if(SETUP == 4) {   /*resier Full*/
                         setup_opt = false
                         card_user.querySelectorAll('.sinpup')[0].style.display = "none"
                         send_bu.textContent = "Register"
                         card_user.querySelector('.Pass_area').style.display = "block"
                         Array.from(card_user.querySelectorAll('.sinpup')).slice(1).forEach(function(e){
                             e.style.display = "block"
                         });
                          
                          for(let i =0; i < all_ok.length;i++){
                                 if(all_ok[i] == false){
                                   card_user.querySelectorAll('input')[i].focus()
                                break
                                 }
                          }
                        
                    }
                  }
                 
                 
             
                  
             
          }
       } //end  click
        
    
  
    }
    
    else if(type == 'login'){ 
           card_user.querySelector('[attr="email"]').oninput = null
           card_user.querySelectorAll('[attr="pass"]')[0].oninput = null
           
           
          card_user.querySelector('.other_action').style.display = "flex"
             card_user.querySelector('.Pass_area').style.display = "block"
        card_user.querySelectorAll(".forget").forEach(function(self){self.style.display = "none";});
        card_user.querySelectorAll(".sinpup").forEach(function(self){self.style.display = "none";});
        card_user.querySelector('[check="email"]').textContent = 'Email | User';
         
       card_user.querySelectorAll('[attr="pass"]')[0].onkeyup = function(event) {
            if(event.key  == "Enter"){
                action_LLOGIn()
            } 
       }  
          
    card_user.querySelector('[type="login"]').onclick = function (){
              action_LLOGIn()
               
        } //end  click
        
      function action_LLOGIn(){
           self =  card_user.querySelector('[type="login"]');
            var email  = card_user.querySelector('[ attr="email"]');
    
              var pass   = card_user.querySelector('[ attr="pass"]');
              var action  = false
     if(!(email.value.replaceAll(/\s/g,"").length > 0)){
          checking_card(email)
         action = false ;
     }else if(!(pass.value.replaceAll(/\s/g,"").length > 3)){
          checking_card(pass)
          action = false ;
     }else { 
        action = true ;
     } 
    
     if(email.value.includes("@")){
       email  = email.value.toLocaleLowerCase()   
     } else { 
        email  = email.value;  
     }   
        
      
    if(action == true) {
     http2.get('/@ATTR_REQUEST@',{type:"login",email:email,pass:pass.value},"json")
     .setTime(100000*120) //2 min
     .wait(function(){ 
        card_wating_animate();    
        self.style.display = "none"  
    card_user.querySelector('.other_action').style.display = "none";
       status_card("none");   
     })                   
    .done(function(data){                            
        if(data.status == 200) { //ok
        
           if(r_url.length > 0){   
            window.location.replace(r_url)  
          }else {
             window.location.replace("/"+data.url) 
          }
        
           
           
        }     
        else if(data.status == 300)  {   
            alert(data.text) 
             status_ok(self)
        } else if(data.status == 400){ 
           status_ok(self,data.text)
              
        }else if(data.status  == 500){
             alert(data.text) 
            status_ok(self) 
        }
    })
    .error(function(){ 
               status_ok(self,"some time worng")
           })
    .timeOut(function(){
               status_ok(self,"Request Time Out")
    }); 
                          
    }                
               
     }
         
    }else if(type == 'forgot'){
        card_user.querySelector('.other_action').style.display = "flex"
           card_user.querySelector('.Pass_area').style.display = "block"
        card_user.querySelectorAll(".forget").forEach(function(self){self.style.display = "block";});
         card_user.querySelectorAll(".sinpup").forEach(function(self){self.style.display = "none";});
          card_user.querySelector('[check="email"]').textContent = 'Email';
           enable_disbled_eUCheking =  false;
        
    }
    
    
}
 
 
 
 
 
 card_user.querySelector(".other_action").querySelectorAll('a')
 .forEach(function(e){
   e.onclick = function (){
     type =   this.getAttribute('type')
      mode_card(type,this.textContent+"<a href=''>?</a>")
   } 
 });








  var hide_Pass=   all('.model .pass_show')


     hide_Pass.forEach(function(a){
         a.onclick = function (){
             if(this.getAttribute('type')  == "hide"){
                    this.style.display = "none" 
                    ss('[attr="pass"]').setAttribute('type',"text")
                   hide_Pass[1].style.display = "inline"
             }else {
                    hide_Pass[0].style.display = "inline"
                     hide_Pass[1].style.display = "none"
                      ss('[attr="pass"]').setAttribute('type',"password")
             }
         }
     });
   
   for (input of  all(".card_user .model input")){
       input.onfocus = function (){
           this.style.cssText +="border-right:solid 1px gray;border-top:solid 1px gray"
       }
       
      input.onblur = function (){
           this.style.cssText +="border-right:none;border-top:none"
       }
   }  
    