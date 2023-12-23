  
 
 
 var main_overWarp = ss('.main_overWarpA'), overWarpA =  main_overWarp.querySelector('.overWarp'),overWarpB =  main_overWarp.querySelector('.Sub_tolBar'); 


overWarpA .style.cssText +=`top:${ss('.toll_bar').scrollHeight+17}px`;  
overWarpB.style.cssText +=`top:${ss('.toll_bar').scrollHeight+17}px`; 
   
     
 main_overWarp2_to  = ss('html').scrollHeight;
  
  this.onresize = function (){ 
     main_overWarp2_to =   ss('html').scrollHeight; 
  }
interact('.main_overWarpB').resizable({
    // resize from all edges and corners
     
    edges: { left: false, right:false, bottom: false, top: true },
   listeners: { 
      move (event) { 
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
             
       
    
       var as =   (event.rect.height/ main_overWarp2_to) 
       var as2 = 1-as;  
          
         function top_elemtns(value){
              ss('.overWarp ').style.bottom =   value; 
              //ss('.Sub_tolBar').style.bottom =   value;
         }
        
             target.style.height =  `${Math.round((as / 1) * 100)}%`; 
             bottom  = `${Math.round((as / 1) * 100)}%`;
             top_elemtns(bottom)
           
           
           if(Math.round((as2 / 1) * 100) <=50){     
                  target.style.height = "50%";//max
                  top_elemtns('50%')
           }else if(event.rect.height<=20){ 
                 top_elemtns('20px')     //min
                 target.style.height = "20px"; 
           }
           
    
              
        
        //x += event.deltaRect.top; 
        target.setAttribute('data-x', x) 
        target.setAttribute('data-y', y)
       
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      })

      // minimum size 
      
    ],
  
    inertia: true
  });
  
  interact('.Sub_tolBar').resizable({
    // resize from all edges and corners
     
    edges: { left: false, right: true, bottom: false, top: false },
    listeners: { 
      move (event) { 
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
             
       
    
       var as =   (event.rect.width/main_overWarp.scrollWidth) 
       var as2 = 1-as;  
          
          function top_elemtns(value){
              ss('.overWarp ').style.left =   value; 
              ss('.main_overWarpB').style.left =   value;
         }
        
          top_elemtns(`${Math.round((as / 1) * 100)}%`); 
           target.style.width =  `${Math.round((as / 1) * 100)}%`;
           
           if(Math.round((as2 / 1) * 100) <=50){   
                target.style.width = "50%";                //max
                top_elemtns("50%"); 
           }else if(event.rect.width<=50){ 
                top_elemtns("50px");      //min
                 target.style.width = "50px";
           }
           
    
              
        
        x += event.deltaRect.left; 
        target.setAttribute('data-x', x) 
        target.setAttribute('data-y', y)
       
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      })

      // minimum size 
      
    ],
  
    inertia: true
  });
interact('.output').resizable({
    // resize from all edges and corners
     
    edges: { left: true, right: false, bottom: false, top: false },
    onstart: function (event) {ss('.ss').style.display = 'block'},
     onend  : function (event) {ss('.ss').style.display = 'none'},
    listeners: { 
      move (event) { 
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
             
       
    
       var as =   (event.rect.width/ss('.overWarp').scrollWidth)
       var as2 = 1-as;
       all('#editor').forEach(function(e){
           e.style.right =   `${Math.round((as / 1) * 100)}%` ;
       });
         
         target.style.left =  `${Math.round((as2 / 1) * 100)}%`;
          
           if(Math.round((as2 / 1) * 100) <=10){
                 target.style.left = "10%";               //max
              all('#editor').forEach(function(e){
               e.style.right =   `90%` ;
             });
           }else if(Math.round((as / 1) * 100)<=10 ){
                all('#editor').forEach(function(e){  //min
               e.style.right =   `10%` ;
             });      
                target.style.left = "90%";
           }
           
    
              
        
        x += event.deltaRect.left; 
       // y += event.deltaRect.top
   
       // target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x) 
        target.setAttribute('data-y', y)
       
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      })

      // minimum size 
      
    ],
  
    inertia: true
  });