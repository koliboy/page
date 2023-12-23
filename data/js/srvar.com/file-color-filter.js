 /*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */



  
    function sub_childern_color (e){
   
  let prent = e;
  let pettern2 = 0;                    
  setInterval(function(){
      if(prent.querySelector('.f-sub') != null){
      prent.querySelector('.f-sub').childNodes.forEach(function(ch){
     if( ch instanceof HTMLDivElement){ 
         if(ch.getAttribute('color_set') == null){
             ch.setAttribute('color_set',true)
           ch.style.color =`hsla(${prent.getAttribute('next')}, 100%, 26%, 1)`
           if(Array.from(ch.classList).includes("f-fold")){ /*this is a folder*/
                let retry = true;
                setInterval(function(){  /*not  last modfily color*/        
                     if(retry){                                                                                                                          
                    colors = Math.random() *360 ;                                                                                                                                            
                    if(colors != pettern2 && colors != prent.getAttribute('next') &&  (colors+15 > pettern2 || colors+15 < pettern2) &&  colors+15 < 360){                                       
                       pettern2 = colors                                                       
                        retry = false;      
                        ch.setAttribute('next',colors)
                       let  left_arrow =  ch.querySelector('.fold-h').querySelector('.icon-a')
                       setInterval(function(){
                          if(left_arrow != null && left_arrow.getAttribute('set_color') == null) {
                          left_arrow.setAttribute('set_color',true)
                          left_arrow.style.fill = `hsla(${colors}, 100%, 26%, 1)`;    
                          }
                       });
                         sub_childern_color(ch)            
                      } 
                     }
                    })  //retry end 
               /**/              
            }
         }
         
        
     }
  });
  }
  })
  
  
}                                           
    let pettern = 0
    let lef_file = ss('.Sub_tolBar ')
    setInterval(function(){
        if(lef_file !=null && lef_file.querySelector('.page .files').querySelector('.f-home .f-sub') != null){
         lef_file.querySelector('.page .files').querySelector('.f-home .f-sub').childNodes.forEach(function(e,i){
        if( e instanceof HTMLDivElement){
           if(e.getAttribute('color_set') == null){
              e.setAttribute('color_set',true)
              if( Array.from(e.classList).includes("f-fold")){                                               
                 let retry = true;  
                  setInterval(function(){  /*not  last modfily color*/       
                     if(retry){     
                    colors = Math.random() *360 ;
                    if(colors != pettern  && (colors+15 > pettern || colors+15 < pettern) &&  colors+15 < 360){                                     
                        pettern = colors                                                            
                        retry = false;      
                        e.setAttribute('next',colors) 
                       e.style.cssText += `border-left:solid 0.5px hsla(${colors}, 100%, 26%, 1);  border-left-style:dotted;`
                       let  left_arrow =  e.querySelector('.fold-h').querySelector('.icon-a')
                       setInterval(function(){
                          if(left_arrow != null && left_arrow.getAttribute('set_color') == null) {
                          left_arrow.setAttribute('set_color',true)
                          left_arrow.style.fill = `hsla(${colors}, 100%, 26%, 1)`;    
                          }
                       });
                       
                        sub_childern_color(e)        
                      } 
                     }
                    })  //retry end
                
              }
           }     
        }
   })
    }
    });