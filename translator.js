    
    document.getElementById("image_menu").onclick=function(){
        var menu=document.getElementById("menu");
        if(menu.style.display=="flex"){
            menu.style.display="none";
        }else{
            menu.style.display="flex"
        }
    }


    function traductor(){
        if(document.documentElement.lang=="en"){
            if (!localStorage.getItem('traductor', 'en')){
                localStorage.setItem('traductor', 'en');
            }
        }

        if(document.documentElement.lang=="es"){
            if (localStorage.getItem('traductor', 'en')){
                localStorage.removeItem('traductor', 'en');
            }
        }
        if(document.getElementById(":1.container") != null){
            if(document.getElementById(":1.container").style.display != "none"){
                document.getElementById(":1.container").style.display="none";
                document.getElementsByTagName("body")[0].style.top="0"
            }
        }
    }
    setInterval('traductor()',1000);

    function googleTranslateElementInit() {
        
        if (localStorage.getItem('traductor', 'en')){
            new google.translate.TranslateElement({
                pageLanguage: 'es2',
                includedLanguages:'en,es', gaTrack: true
            }, 'google_translate_element');
            setTimeout(function(){
                var select = document.querySelector('select.goog-te-combo');
                select.value    = "en"; 
                select.dispatchEvent(new Event('change'));         
            },1000)
        }else{
            new google.translate.TranslateElement({pageLanguage: 'es2', includedLanguages: 'en,es', gaTrack: true}, 'google_translate_element');
        }

        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    }