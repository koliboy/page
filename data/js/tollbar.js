    
    
    
    
var hed_files = ss('.toll_bar').querySelector('.file_active'); 

let resv = hed_files.querySelectorAll('div'),expands =  ss('.toll_bar').querySelector('.expands');
let ex_data = ss('.expand_data').querySelector('.list')


ex_data.querySelectorAll('div').forEach(function(e){
    e.addEventListener('mouseenter',function(x){ 
      e.querySelector('.close').style.opacity = "1"; 
    });
    e.addEventListener('mouseleave',function(x){
     e.querySelector('.close').style.opacity = "0";
    })
});
resv.forEach(function(e){
    e.addEventListener('mouseenter',function(x){ 
        e.querySelector('.close').style.opacity = "1"; 
    });
    e.addEventListener('mouseleave',function(x){
          e.querySelector('.close').style.opacity = "0";
    })
})


/*rigth expands */ 
let ex_l_height = ex_data.scrollHeight;
let ex_l_top  =  ss('.toll_bar').scrollHeight;
 setInterval(function(){ 
     this_expand = ex_data.querySelectorAll('div').length
       if(this_expand > 0){
           expands.style.display = "inline-flex"
       }else {
           ss('.expand_data').style.display = "none";
         expands.style.display = "none"  
       }
       ex_data.style.height = `${ex_l_height+100}px`;
       ss('.expand_data').style.top = `${ex_l_top}px`;;
       
 })
 
 
/*    cureent  active  code*/
let sum = Array.from(hed_files.querySelectorAll('.name'));
  hed_files.querySelectorAll('.enxdent').forEach(function(s){
      sum.push(s)
  });
 ex_data.querySelectorAll('.name').forEach(function(w){
     sum.push(w);
 });
 
  ex_data.querySelectorAll('.enxdent').forEach(function(w){
     sum.push(w);
 });
sum.forEach(function(ac){
    ac.addEventListener('click',function(){
         let sef = this.parentElement,child = Array.from(this.parentElement.parentElement.classList);
           if(child.includes("file_active")){
            this.parentElement.setAttribute('active',true);
            resv.forEach(function(e){
             if(e != sef){
                e.setAttribute('active',null);
             }
         });
            }else {
               hed_files.append(sef);
                ac.click();
            }
            
         
        
         
     });
   
});

/*  close  file ____________________________________*/


function File_close (a){
    if(a.getAttribute('active') == "true"){

        let  i2= Array.from(hed_files.querySelectorAll('div')).indexOf(a)
             let fil_o = hed_files.querySelectorAll('div');
             if(fil_o[i2+1]  instanceof  HTMLDivElement ){ //next acitve
                 fil_o[i2+1].querySelector('.name').click();
                    let exp_ndd  = ss('.expand_data').querySelector('.list').querySelectorAll('div');
                    if(exp_ndd.length > 0)
                    hed_files.append( exp_ndd[0]) 
              }
              else { // back active 
                 let exp_nd  = ss('.expand_data').querySelector('.list').querySelectorAll('div')
                   if(exp_nd.length > 0){ 
                       let n =  exp_nd[0];
                         a.remove() 
                      hed_files.append(n)  
                     n.querySelector('.name').click()
                   }
                   else if(fil_o[i2-1] instanceof  HTMLDivElement) { 
                     fil_o[i2-1].querySelector('.name').click() 
                   }
                
              }
              a.remove()
             
          }  
    else {
        let exp_ndd  = ss('.expand_data').querySelector('.list').querySelectorAll('div');
                    if(exp_ndd.length > 0)
                    hed_files.append( exp_ndd[0])
                     a.remove()
    }
    
    
    
    
}
resv.forEach(function(a){ 
     a.querySelector('.close').addEventListener('click',function(){
        File_close(a)
    });
    
})

 /* size  adjust  files toll_bar*/
for(let i = resv.length-1; i >= 0; i--){
      setInterval(function(){
  let  jada =  this.innerWidth < ss('.toll_bar').scrollWidth;
       if(jada){
          
           if((resv[i].getAttribute('active') == 'true') || (hed_files.querySelectorAll('div')[0] == resv[i])){
               resv[i].style.display = 'flex';  
           }else {
              ex_data.append(resv[i]) //resv[i].style.display = 'none';  
           }
       }
     }) 
  }

 
this.addEventListener('resize',function(){
let back =  ex_data.querySelectorAll('div');
for(let i = back.length-1; i >= 0; i--){
    
      let  jada =  this.innerWidth >= ss('.toll_bar').scrollWidth;
       if(jada){
           hed_files.append( back[i])
           if(e.style.display == 'none'){
              // e.style.display = "flex";
           }
            
       } 
    };
     
    
   
});  
 

expands.addEventListener('mouseenter',function(){
    ss('.expand_data').style.display = "flex"
});

ss('.expand_data').querySelector('.hidden').addEventListener('mouseenter',function(){
    ss('.expand_data').style.display = "none";
});


hed_files.querySelectorAll('div').forEach(function(el,i){
    total = 200-12;
    if( i== 0){ //first  element
      total  =  total -14;
    }
     let ex = el.querySelector('.enxdent'),name = el.querySelector('.name');
     name.style.cssText = `max-width:${(total -ex.scrollWidth)-5}px;` 
    
    
});





     /*toll_bar input*/
   var addon  = ss('.toll_bar').querySelector('.addon');
   
   
   addon.querySelector('.add_').onclick = function(){
       ss('.toll_bar').querySelector(".Layout").style.display = "none";
       this.style.display = "none";
      addon.querySelector('.attech_fil_fol').style.display = "block"
       addon.querySelector(".hid_input").style.display = "block" 
       addon.querySelector('input').focus();
       addon.querySelector('.save_public').style.display = "none"
       
   }
   
   addon.querySelector('.hid_input').onclick = function(){
       ss('.toll_bar').querySelector(".Layout").style.display = "inline-flex";
       this.style.display = "none";
       addon.querySelector('.attech_fil_fol').style.display = "none"
        addon.querySelector('input').value = null;
       addon.querySelector(".add_").style.display = "block"
         addon.querySelector('.save_public').style.display = "block"
   }
    
    
    /*drop NAd  drong files in toll bar*/

let file_d  = hed_files.querySelectorAll('div');
 let  drop  = null;
  file_d.forEach(function(el){
    
     el.addEventListener('dragstart',function(ev){
         drop = ev.target;
     }) 
    
       el.addEventListener('dragover',function (ev){
         event.preventDefault(); 
          
        //this.style.cssText += "opacity: 0.20;"
        if(drop instanceof HTMLDivElement && this.parentElement ==  drop.parentElement){
            this.style.cssText += "opacity: 0.20;"
            }else { 
               this.style.cssText += "opacity:1;"
            }
         }) ;
    el.addEventListener('drop',function (ev){ 
         event.preventDefault();  
          this.style.cssText += "opacity:1"
          pos = null,pos2 = null,se = this;
          hed_files.querySelectorAll('div').forEach(function(e,i){
                if(drop == e){
                   pos = i; 
                }else if (se == e){
                     pos2 = i;  
                }
          });
         
         if(drop instanceof HTMLDivElement && this.parentElement ==  drop.parentElement){
          
             if( pos < pos2){  
                 this.after(drop); 
             }
             else  { this.before(drop); }
         }
          
     }) ;
     
    el.addEventListener('dragleave',function(){
           this.style.cssText += "opacity:1"
           
      });
         
     
  });
  
  
  let pin = hed_files.querySelectorAll('div')
let att = `
    <svg class="attech_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C9.794 2 8 3.794 8 6C8 7.8684226 9.2931298 9.4276051 11.027344 9.8652344C11.020831 9.9113128 11 9.9521332 11 10L11 21C11 21.552 11.448 22 12 22C12.552 22 13 21.552 13 21L13 10C13 9.9521332 12.979169 9.9113128 12.972656 9.8652344C14.70687 9.4276051 16 7.8684226 16 6C16 3.794 14.206 2 12 2 z" />
</svg>
`;
    
let attech = document.createElement('dt') ;
    attech.classlist = "attech";
    attech.innerHTML = att;

   
       
       setInterval(function(){ 
          hed_files.querySelectorAll('div').forEach(function(e,i){
              if(i == 0) {
               if(e.getAttribute('pin') == null || e.getAttribute('pin') == "null"){
                   e.setAttribute('pin',true);
                   e.querySelector('.name').before(attech)
               }
           } else if(e.getAttribute('pin') == 'true'){
                     e.setAttribute('pin',null);
                    e.querySelector('.attech').remove()
                    
           }
            
              
          });
       });
  
 
  /*full  dirctory show  in bottom*/
  
  
 let right_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11px" height="11px">
  <path d="M14 4.9296875L12.5 6.4296875L17.070312 11L3 11L3 13L17.070312 13L12.5 17.570312L14 19.070312L21.070312 12L14 4.9296875 z"/>
</svg>`;
  let change = null;  
 setInterval(function(){
       hed_files.querySelectorAll('div').forEach(function(e){
           if(e.getAttribute('active') == 'true'){
               if(!(change == e)){
                   change = e;
             ss('title').textContent  = e.querySelector('.name').textContent+""+e.querySelector('.enxdent').textContent;
              ss('.full_src').innerHTML =  `<div class='full_srctext'>${e.getAttribute('src_')}<div>`.replace(/\//g,`<b class='ch'>${right_svg}</b>`) 
           }
           }
       })   
      });     

