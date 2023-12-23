  /*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */

setInterval(function(){
    let alt = all('.se-alt') 
alt.forEach(function(e){
    if(e.getAttribute('set-alt') == null){
        e.setAttribute('set-alt',true)
        let type = e.querySelectorAll('em')
        let sections = document.createElement('div')
        sections.classList.add('sections')
        let se_head  = document.createElement('div')
         se_head.classList.add('se-head')
        let data  = document.createElement('div')
         data.classList.add('data')
        type.forEach(function(e2){
           let dt  = document.createElement('dt') 
               dt.setAttribute('type',e2.getAttribute('type'))
               dt.innerHTML = e2.textContent 
                if(e2.getAttribute('default') != null){
                dt.setAttribute('default',true)
                 dt.classList.add('active')   
                }
              se_head.append(dt); /*header*/
               let find_data = all(`[type-alt=${dt.getAttribute('type')}]`)
               find_data.forEach(function(e3){
               let dft_  =    se_head.querySelector(`[type=${e3.getAttribute('type-alt')}]`).getAttribute('default')
                  if( dft_ != null){
                     e3.style.display = "block";
                  }else {
                      e3.style.display = "none";  
                  }
                  
                 data.append(e3)  
               })
        })
        sections.append(se_head,data)
        e.after(sections)
        e.remove()
    }
    
    
})
});

setInterval(function(){
    let sections_  = all('.sections')  
 sections_.forEach(function(e){ 
      let e2 = e.querySelector('.se-head')
      if(e2 != null){
       let e3 = e2.querySelectorAll('dt');
         e3.forEach(function(e4){
            if(e4.onclick == null){ 
               e4.onclick = function() {
                 
                   let self_e4 = this
                   e3.forEach(function(e8){
                       if(e8 == self_e4){
                         if(Array.from(e8.classList).includes('active')){
                            e8.classList.remove('active') 
                         }else {
                             e8.classList.add('active')   
                         }   
                       }
                       else {
                         e8.classList.remove('active') 
                       }
                   })
                   let typ = this.getAttribute('type')
                   let e5 =  e.querySelector('.data')
                   let e6  = e5.childNodes
                   e6.forEach(function(e7){
                       if(!(e7 instanceof   Text)){
                           if(e7.getAttribute('type-alt') == typ){
                               if(e7.style.display == "block"){
                                 e7.style.display = "none"  
                               }else { e7.style.display = "block"  }
                           }
                           else {
                                e7.style.display = "none" 
                           }
                       }
                   })
                 
               }
            }
         })
      }
 })
}); /*end Selection js*/

   
  
  
setInterval(function(){
    let h1 = all('h1')
let h2 = all('h2')
let h3 = all('h3')
let h4 = all('h4')
let h5 = all('h5')
let h6 = all('h6')
let heading = [...h1,...h2,...h3,...h4,...h5,...h6]
heading.forEach(function(e){
     if(e.getAttribute('setup-e') == null){
         e.setAttribute('setup-e',true)
       let flex  = document.createElement('div')
       let dt   =  document.createElement('dt')
       let a   =  document.createElement('a')
       let hding  = document.createElement(e.tagName.toString())
       hding.setAttribute('setup-e',true)
       a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 7C3.239 7 1 9.239 1 12C1 14.761 3.239 17 6 17L10 17L10 15L6 15C4.343 15 3 13.657 3 12C3 10.343 4.343 9 6 9L10 9L10 7L6 7 z M 14 7L14 9L18 9C19.657 9 21 10.343 21 12C21 13.657 19.657 15 18 15L14 15L14 17L18 17C20.761 17 23 14.761 23 12C23 9.239 20.761 7 18 7L14 7 z M 7 11L7 13L17 13L17 11L7 11 z" /></svg> `;
       a.classList.add('a-none')
       flex.classList.add("flex")
       hding.classList.add("h")
       let scp = e.textContent.toLowerCase().replace(/([^\w+]+)/g,"_")
       hding.setAttribute('has',scp) /*attr has find  again*/
       hding.innerHTML = e.textContent;
       a.href = "#"+scp;
       dt.append(a)
       flex.append(dt,hding)
       e.after(flex)
       e.remove()
      
     }
 }); 
});
 setInterval(function(){
      let e = all('.flex')
      e.forEach(function(e){
        if(e.onpointerenter == null || e.onpointerleave == null) {
            e.querySelector('dt').style.cssText = `margin-top:${e.querySelector('.h').scrollHeight}px`
            e.onpointerenter = function(){
             e.querySelector('dt').style.display = "block";
            this.querySelector('dt').querySelector('svg').style.display = 'block'
          }
        e.onpointerleave = function(){
         this.querySelector('dt').querySelector('svg').style.display = 'none'
         e.querySelector('dt').style.display = "none";
           }
         } /*hover*/
         if(e.querySelector('h1') != null && e.querySelector('h1').getAttribute('set-b') == null){
             e.style.cssText += "border:none;border-bottom:solid 1px gray"
         }
         /*h1*/
      })
  });
    
    /*imges*/  

setInterval(function(){
   let img = all('img')
   img.forEach(function(e){
       if(!(Array.from(e.parentNode.classList).includes('imgs'))){
         e.parentNode.classList.add("imgs")  
       }
   });
}); 


     
     
hljs.highlightAll();

let map = [...location.pathname.matchAll(/\/[^\/]+/g)]
let pixed = ""
     for( c in map){
         pixed += map[c][0]
         let d = document.createElement('dt')
         d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M15 4L15 9L3 9C2.448 9 2 9.448 2 10L2 14C2 14.552 2.448 15 3 15L15 15L15 20L23 12L15 4 z" fill="gray" /></svg>`
         let a = document.createElement('a')
         if(map.length-1 == c){
             a.href =  pixed  //map[c][0].slice(1)
             a.textContent = map[c][0].slice(1)
             d.append(a)
             ss('.path .cureent').append(d)
         }else {
              a.href = pixed 
             a.textContent = map[c][0].slice(1)
             d.append(a)
             ss('.path .back').append(d)
         }
     }
     


setInterval(function(){    /*inline class*/
   let class_ = all('.c-frmt') 
   class_.forEach(function(el){
       if(el.getAttribute('class-set-f') == null){
           el.setAttribute('class-set-f',true)
           let cmpre = el
        let bind = []
   el.parentElement.childNodes.forEach(function(e){
        if(e instanceof  HTMLElement){
          if( e == cmpre ||  e.tagName == "PRE"){
              bind.push(e);}}})
   for( mind of bind.entries()){
         if(mind[1] == cmpre){
           let nextcode = bind[mind[0]+1] != undefined //.tagName == "PRE"   //next code class
          
           if(nextcode){
             if(bind[mind[0]+1].tagName == "PRE"){
               if(bind[mind[0]+1].querySelector('code') != null){
                  bind[mind[0]+1].classList.add('class') 
               }
             }
           }
         }
    }
   
       }
   }); /*end forEach*/
 });