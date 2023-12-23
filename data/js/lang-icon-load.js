 /*
   Copyright [2022] [kamlla group code]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
    attr kamllagroup.com
   */

let icon_obj = null, refrs = true;
setInterval(function () {
    if (refrs && icon_obj == null &&  typeof http2 != 'undefined') {   
        http2.get('/lib/lang-icon.json', null, 'json')
            .wait(function () { refrs = false }).done(function (js) { icon_obj = js; refrs = false; })
            .error(function(){ refrs = true});
    }
})
   
   setInterval(function () {
    let file_ex = ss('.Sub_tolBar .content .page .files');
    if (file_ex != null && icon_obj != null) {
        file_ex.querySelectorAll('.fold-f').forEach(function (e) {
            let exps = e.getAttribute('exps')
            if (e.getAttribute('exps_set') == null) {
                e.setAttribute('exps_set', true)
                if(icon_obj[exps] != undefined)
                e.querySelector('.icon').innerHTML = icon_obj[exps];
                else   e.querySelector('.icon').innerHTML = icon_obj["unsport"];
            }

        })
    }
})