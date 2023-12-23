/*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */
   
   

   ss('.mb-side .sid-cnt .ext_mb').onclick = function(){
      ss('.mb-side').style.display = "none"
  }
  ss('.toll_bar .main').onclick = function(){
      ss('.mb-side').style.display = "block"
  }
    
     /*set in this article*/
    setInterval(function(){
        let flex_side = all('.c-docs .flex')  
    flex_side.forEach(function(e,index){
        if(e.getAttribute('teup-sidbr') == null){
           e.setAttribute('teup-sidbr',true)
         let  dt = document.createElement('dt')
         if (index == 0){
             dt.classList.add("active")
         }
         dt.setAttribute("url",e.querySelector('a').href)
          dt.textContent = e.textContent
          ss('.sidear .this').append(dt) ;
           ss('.sidear').setAttribute('set-cnt',true)
        }
    }); 
        
});
    
    
   
   
    setInterval(function(){ 
        if(ss('.sidear').getAttribute('set-cnt') != null && ss(".mb-side").getAttribute('set-cnt') == null ){
        ss(".mb-side").setAttribute('set-cnt',true)
        ss(".mb-side .this").innerHTML =  ss('.sidear .this').innerHTML;
         ss(".mb-side .related").innerHTML  =  ss('.sidear .related').innerHTML;
        }
});
    
    /*sidebar list  onclick*/
    setInterval(function(){
        let dak = all('.sidear .this dt')
        let mob = all('.mb-side .this dt')
        let dt = [...dak,...mob]
        if (dak.length = mob.length){  //is coped
             dt.forEach(function(el,index){
            if (el.onclick == null){
                el.onclick = function(){
                    let self = this;
                    let url_q = new URL(self.getAttribute("url"))
                    if (new String(url_q).length > 1){
                      let find = ss(`[has=${url_q.hash.slice(1)}]`)
                       if(find != null){
                              let to = find.parentNode
                             ss("html").scrollTop = (to.getBoundingClientRect().top) + ss("html").scrollTop-(to.scrollHeight+15) 
                         }
                    }
                    /*active bar*/
                   dt.forEach(function(el2){
                       let url = self.getAttribute('url')
                       
                       if(url == el2.getAttribute('url')){
                            el2.classList.add("active")
                       }else{
                             el2.classList.remove("active");
                       }
                   }); 
                  ss('.mb-side').style.display = "none"
                }
            }
        })
    } //end if
});


  /*location load time in hash*/
   var load = true;
    let hs1 = location
    if(hs1.hash.length > 1){  //is  hash
    setInterval(function(){ 
           if(load){  
          let qfirst =  ss(`[has=${hs1.hash.slice(1)}]`) 
           if( qfirst != null){
              load = false 
              let dak = all('.sidear .this dt')
              let mob = all('.mb-side .this dt')
              let dt = [...dak,...mob]
              let to = qfirst.parentNode
              ss("html").scrollTop = (to.getBoundingClientRect().top) + ss("html").scrollTop-(to.scrollHeight+15) 
               
             dt.forEach(function(el,index){
                 if(el.getAttribute("url") == new String(hs1)){
                      el.classList.add("active");
                 }else{
                    el.classList.remove("active"); 
                 }
             });
             } 
           }
           
           
       });
}


/*url on hashchange*/

this.addEventListener('hashchange',function(){
      let hs3 = location
    if(hs3.hash.length > 1){  //is  hash
           let qfirst =  ss(`[has=${hs3.hash.slice(1)}]`) 
           if( qfirst != null){
              load = false 
              let dak = all('.sidear .this dt')
              let mob = all('.mb-side .this dt')
              let dt = [...dak,...mob]
              let to = qfirst.parentNode
              ss("html").scrollTop = (to.getBoundingClientRect().top) + ss("html").scrollTop-(to.scrollHeight) 
             
            } 
    }
 });
 
 
/*onscroll ative bar*/
document.onscroll = function(){
     let hedings = all(".c-docs .flex") 
     
      let last_view = Array.from(hedings).filter(function(el){
            
            if((el.getBoundingClientRect().top < 0) || (el.getBoundingClientRect().top == 0)
            ||(el.getBoundingClientRect().top <= el.scrollHeight+19) ){
               return el  
            }
          
      });
      
     if (last_view.length >0){
         el_vidwP = last_view[last_view.length -1] //last
         let dak = all('.sidear .this dt')
         let mob = all('.mb-side .this dt')
         let dt = [...dak,...mob]
         let urlmatch =  el_vidwP.querySelector("[has]").getAttribute('has') 
        // ss('.test').textContent = urlmatch
         dt.forEach(function(el,index){
                url2 = new URL(el.getAttribute("url"))
               if(url2.hash.length> 1){
                  
                   if(urlmatch == url2.hash.slice(1)){
                      el.classList.add("active");
                 }else{
                    el.classList.remove("active"); 
                 }
               }
                 
             });
     }
}//onscroll