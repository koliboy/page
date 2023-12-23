/* Attr Kamlla group Team
          copyright  kamllagroup code*/

var them_button = ss('[theme="mode"]')  
    them_button.onclick = function(){
      
          
          
       them =  this.getAttribute('t')
       ss('.result').append(them)
      
       if(them == "light_"){
         this.setAttribute('t','dark_') ;  
         localStorage.setItem("THEME_MODE_","dark_"); 
       }else { 
        localStorage.setItem("THEME_MODE_","light_"); 
          this.setAttribute('t','light_')
       }
    }
   setInterval(function(){
        ac = them_button.getAttribute('t')
       if(localStorage.getItem("THEME_MODE_") == "dark_"){
          if(ac != "dark_"){them_button.setAttribute('t','dark_') }
          themaddclass();
       }else if(localStorage.getItem("THEME_MODE_") == "light_"){
          if(ac != "light_"){them_button.setAttribute('t','light_') }
          themremoveclass();
       }
       
   }) 
    
  /*function themaddclass (){
      all('.theme_background').forEach(function(e){
        if(!Array.from(e.classList).includes('theme_dark_')){
            e.classList.add("theme_dark_")
        }
      });
      }
  function themremoveclass (){ 
      all('.theme_background').forEach(function(e){
        if(Array.from(e.classList).includes('theme_dark_')){
            e.classList.remove("theme_dark_")
        } 
      });
  }*/