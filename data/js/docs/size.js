 /*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */
   
  if(ss('html').scrollWidth >=900){
        ss('.sidear').style.display = "block"
        ss(".mb-side").style.display = "none"
     }else {
       ss('.sidear').style.display = "none"  
     }
 ss('.body').style.cssText +=`margin-top:${ss('.path').getBoundingClientRect().bottom+5}px`
 ss('.c-docs').style.cssText += `min-height:${(ss('html').scrollHeight-ss('.path').scrollHeight-ss('.footer').scrollHeight)-70}px`
 let find_bar = ss('.toll_bar .srch')
 let rct = (ss('html').scrollWidth-find_bar.getBoundingClientRect().left)
  //find_bar.style.width = `${rct-10}px`
 ss('.sidear .sid-cnt').style.cssText += `width:${ss('.sidear').scrollWidth}px`;
 
 this.onresize = function (){
      if(ss('html').scrollWidth >=900){
            ss(".mb-side").style.display = "none"
        ss('.sidear').style.display = "block"
     }else {
        ss('.sidear').style.display = "none"  
     }
     
   ss('.sidear .sid-cnt').style.cssText += `width:${ss('.sidear').scrollWidth}px`;
     let rct = (ss('html').scrollWidth-find_bar.getBoundingClientRect().left)
      //find_bar.style.width = `${rct-10}px`;
     ss('.c-docs').style.cssText += `min-height:${(ss('html').scrollHeight-ss('.path').scrollHeight-ss('.footer').scrollHeight)-70}px`
 }