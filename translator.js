

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
    }
    setInterval('traductor()',1000);

    function googleTranslateElementInit() {
        
        if (localStorage.getItem('traductor', 'en')){
            new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages:'en', gaTrack: true
            }, 'google_translate_element');
            setTimeout(function(){
                var select = document.querySelector('select.goog-te-combo');
                select.value    = "en"; 
                select.dispatchEvent(new Event('change'));         
            },1000)
        }else{
            new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }
    }