function AppendData(element,data){
       element.innerHTML = data
       element.querySelectorAll("script").forEach(function(script){
             var scriptnew = document.createElement("script") 
            scriptnew.innerHTML = script.innerHTML 
           element.after(scriptnew)
     })
}

/*http3.get("/@ajax",{extension:"page-load/test"})
 .done(function(data){ 
     AppendData(ss('.all_coneter'),data)
    
 })*/