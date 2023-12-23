ss(".find_bar input").onpointerdown = function(){
         if(list_bar.querySelector('a') != null){
              ss('.src-content').style.display = "block"
         }
        
         
     }
         
         
     ss(".find_bar input").oninput = function(){
         ss('.src-content').style.display = "block"
         list_bar = ss(".src-content .s-body")
         //list_bar.innerHTML = null
         list_bar.innerHTML = "<div>Searching..</div>"
         
         loc = location.pathname.slice(1) 
         keyword = this.value.replace(/(^(\s)*)/g,'')
         
         data = {key:keyword,  
                path:loc} 
         
   if ( keyword.length > 0){  
     http2.get("/@search/4",data,'json').done(function(d){  //first --file Similar match
         list_bar.innerHTML = null  
           for (data1 of d){
              
              let a = document.createElement('a') 
              a.href = "/"+data1.path   
              let list = document.createElement('div') 
               list.classList.add('list') 
              let t =  document.createElement('dt')   
              t.classList.add('t')
              t.innerHTML =  data1.value.toLowerCase().replaceAll(keyword.toLowerCase(),"<b>$&</b>")
              list.append(t) 
              a.append(list)
              list_bar.append(a);
               
           } 
          
           
           
      }); //4
       http2.get("/@search/5",data,'json').done(function(d2){  //secound --heding Similar match
            
             for (data2 of d2){
                 
              let a2 = document.createElement('a')  
              a2.href = "/"+data2.path   
              let list2 = document.createElement('div') 
               list2.classList.add('list') 
              let t2 =  document.createElement('dt')   
              t2.classList.add('t')
              t2.innerHTML =  data2.value.toLowerCase().replaceAll(keyword.toLowerCase(),"<b>$&</b>")
              list2.append(t2)
              from_ = document.createElement('dt')
              from_.classList.add('from')
              from_.innerHTML = `<span>from:</span><span>${data2.from}</span>`
              list2.append(from_)
              a2.append(list2)
              list_bar.append(a2)
              }
             if(list_bar.querySelector('a') == null){
                list_bar.innerHTML = "<div>No result found</div>" 
             }
           });//5
   }else{
         list_bar.innerHTML = null
          ss('.src-content').style.display = "none"
   }
      /* like <div class='list'>
                 <dt class='t'>HE<b>dd</b>LLO</dt> 
             <dt class='from'><span>from:</span> <span>headersf</span></dt>
             </div> */
      
     } //end  input
     
     
      ss('.src-content .s-viewport').onpointerdown = function(){
          ss('.src-content').style.display = "none" 
          
          // ss(".find_bar input").value = null
      }
      