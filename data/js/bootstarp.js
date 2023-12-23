  
    /*Under srvar copyrits*/

function now_record(){
let fild_select = all('.fild_a')
  fild_select.forEach(function(e,i){
    if( e.getAttribute('setup') == null){
     e.setAttribute('setup',"ok")
     
     /*inside  elemtns*/
     
     costum_ = document.createElement('div')
     costum_.classList = "select_costum"
     ins_input =  document.createElement('dt')
        ins_input.classList = "input"
     ins_icon  =  document.createElement('dt')
     ins_icon.classList = "icon child"
     svg_icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18 2L14 6L17 6L17 12C17 12.56503 16.56503 13 16 13L9 13L9 15L16 15C17.64497 15 19 13.64497 19 12L19 6L22 6L18 2 z M 8 9C6.3550302 9 5 10.35503 5 12L5 18L2 18L6 22L10 18L7 18L7 12C7 11.43497 7.4349698 11 8 11L15 11L15 9L8 9 z" fill="balck" />
</svg>`
     ins_icon.innerHTML = svg_icon
       costum_.append(ins_input,ins_icon)
       e.childNodes[0].after(costum_)
       ins_search = ins_icon  =  document.createElement('input')
       ins_search.classList = "search"
       ins_search.setAttribute("placeholder","keyword to find")
       e.querySelector('.options').childNodes[0].after(ins_search)
     /* endinside  elemtns*/
       
       
      input_ =  e.querySelector('.select_costum')
      
      input_.style.width = e.getAttribute('width')
      input_.style.height = e.getAttribute('height')
      var input = input_.querySelector('.input')
      setInterval(function(){
          e.querySelector('.options').style.width = input_.scrollWidth+'px'
      })
      
      window.addEventListener('resize',function(){ 
           e.querySelector('.options').style.width = input_.scrollWidth+'px'
      })
       empty_a = document.createElement('div')
            empty_a.classList = "empty_area"
            empty_a.style.display = "none"
            e.querySelector('.options').before(empty_a)
      after_input =  "font-size:13px;border-bottom: none;  border-radius:5px 5px 0 0; box-shadow: 0px -1px 7px pink;"      
       before_input =  "border-bottom:solid 1px pink;  border-radius:5px;box-shadow:none;"
     
      e.change = function(fun){ /*event*/
      
      
      e.querySelectorAll('.options dt').forEach(function(a){  /* selectd*/
             a.addEventListener('click',function (){ 
             input.textContent  = this.textContent
             this.setAttribute("selected",null)
             input.setAttribute('value',this.getAttribute("value"))
             input_.style.cssText += before_input
             self_a = this
              e.querySelector('.options').style.display = "none"
               e.querySelector('.empty_area').style.display = "none"
              e.querySelectorAll('.options dt').forEach(function(other){
                     if(self_a !=other){
                      other.removeAttribute('selected')
                     }
                })
               input.value = input.getAttribute("value")
               fun.call(input,input)
          })
          
          if(a.getAttribute('selected') != null){
              input.textContent = a.textContent
              input.setAttribute('value',a.getAttribute('value'))
          }
      }) 
      return undefined
     }   //end event
      
      
      e.change()
      
       function show_model(){
            input_.style.cssText += after_input
            e.querySelector('.empty_area').style.display = "block"
            e.querySelector('.options').style.display = "block"
       }
       input_.querySelector('.icon').onclick = function (k,v){
                show_model()
           }
        input.onclick = function(){
             show_model()
        }
         e.querySelector('.empty_area').onclick = function(){
                 e.querySelector('.options').style.display = "none"
                 input_.style.cssText += before_input
                 this.style.display = "none"
           
          }
       
     }
     
     /*Searching*/
       e.querySelector('.options').querySelector('input').oninput = function(){
           search= this.value.toLowerCase(),self =this
            e.querySelectorAll('.options dt').forEach(function(e){
                if(e.textContent.toLowerCase().includes(search)){
                   self.after(e)  
                }
            })
           
       }
     e.value =  input.getAttribute("value")
    
})

}  //end  function
 //now_record() /*boostarp*/  
this.record  =  now_record.bind()/*boostarp*/
/* use this bootsrap whwen script  record() anf  call abck elemetns()*/
 
 
 
 /* how  run  attech the  function in script  record()*/
