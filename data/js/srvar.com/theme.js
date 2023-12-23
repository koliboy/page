    ;(function (){
         
    //background-- theme_background
    // text -- theme_text
    // higlight -- theme_higlights
    //this button   -- theme_self *svg 
    //border     -- theme_border 
    //svg icons  -- theme_svg
    //svg pink  -- theme_svgpink    to white
    // border-color   -- theme_border
    // href hover   --theme_href 

 
    
function  _addClass_b(){ //background
// document.body.append(cx)
   
 function setup_ (el,style,addclass){
     el.forEach(function(el){
          if(!(Array.from(el.classList).includes(addclass))){
                   el.classList.add(addclass); 
                   // old =  el.getAttribute('style');
                   //if(old == null){ old = "";}
                  //el.setAttribute('style',`${old};${style};`)
              }});  
 }
       setInterval(function(){
if(localStorage.getItem("THEME_MODE") == "dark"){ 
         setup_(all('.theme_background'),"background:rgba(31, 31, 31, 1)","theme_dark");
       
         
        }
      
       });     
    };
    
     function removeAttr(el){
return el.replace(/(fill:white;|background:rgba\(0, 0, 0, 0.92\);|color:white;|background:rgba\(31, 31, 31, 1\);|fill:pink;|fill:white;|border-color:gray|box-shadow: 1px 2px 10px 2px rgba\(255, 255, 255, 0.21\);|background:rgba\(0, 0, 0, 0.75\);)/g,"");
     }

function  _remove_t(){ 
    
      function unsetup (el,classL){
          all(el).forEach(function(el){ 
          if((Array.from(el.classList).includes(classL))){
                   el.classList.remove(classL); 
                   }});
      }
      unsetup('.theme_background',"theme_dark");
}; //
      
      setInterval(function(){
         if(localStorage.getItem("THEME_MODE") == "dark"){
             ss('[theme="mode"]').setAttribute('t',"dark"); 
             _addClass_b();    
         }else {
               ss('[theme="mode"]').setAttribute('t',"light"); 
            _remove_t() 
         }
      });
  let synk_button = true;   
   setInterval(function(){
       if((ss('[theme="mode"]') != null) && synk_button){
           synk_button = false;
          
          ss('[theme="mode"]').addEventListener("click",function (){
       
           mode = this.getAttribute('t');  
            if(mode == "light"){
             _addClass_b();
              localStorage.setItem("THEME_MODE","dark"); 
              this.setAttribute('t',"dark"); 
            }else  if(mode == "dark") {
            localStorage.setItem("THEME_MODE","light");
               _remove_t();
              this.setAttribute('t',"light");  
                
            }  
            
         });
       }
     
   }) 
    
    
        
        })();