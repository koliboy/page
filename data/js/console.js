/* cosmize  new  console() */
 (function(){
 let top = 0;
 var console_ =  document.createElement('div_log_body')
   console_.style.cssText = `
    background:none; position:fixed; top:0;max-height:500px;overflow-y:auto;
   `
Object.defineProperty(Document.prototype,"console",{
  set(logs){
      top += 45
      
      var box = document.createElement('div_console_PLAY_Logs'), parser_ = new DOMParser(), new_document =   parser_.parseFromString(logs,'text/html').body, create_log  = document.createElement('console_log');
    box.style.cssText = `
    border:solid 0px gray;padding:10px;  margin:5px;
    width:auto;min-width:100px; background:rgba(166, 166, 166, 0.3);height:auto;display:inline-block;
    box-shadow:1px 1px 1px red;white-space: pre;font-weight:580;font-family: Georgia, serif;
    overflow-wrap: break-word;white-space: break-spaces;
    `;
    create_log.style.cssText = "color:blue; font-size:17px;";
    create_log.innerHTML  = "<span style='color:green; margin-right:8px'>>></span>"; 
    create_log.append(new_document.innerHTML);box.append(create_log);
     console_.append(box)
      if (document.querySelector("div_log_body") == null){
           document.body.append(console_)
       }
  }
});


})(); 