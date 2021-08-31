    
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

    document.getElementById("p1").onmouseover = function() {mouseOver("p1")};
    document.getElementById("p2").onmouseover = function() {mouseOver("p2")};
    document.getElementById("p3").onmouseover = function() {mouseOver("p3")};
    document.getElementById("p4").onmouseover = function() {mouseOver("p4")};
    document.getElementById("p5").onmouseover = function() {mouseOver("p5")};

    document.getElementById("p1").onmouseout = function() {mouseOut()};
    document.getElementById("p2").onmouseout = function() {mouseOut()};
    document.getElementById("p3").onmouseout = function() {mouseOut()};
    document.getElementById("p4").onmouseout = function() {mouseOut()};
    document.getElementById("p5").onmouseout = function() {mouseOut()};
    function mouseOver(data) {
        for(var i=1;i<6;i++){
            document.getElementById("p"+i).style.opacity = "0.5";
            document.getElementById("p"+i).style.brightness = "0.5";
        }
        document.getElementById(data).style.opacity = "1";
        document.getElementById(data).style.brightness = "1";
    }

    function mouseOut() {
        for(var i=1;i<6;i++){
            document.getElementById("p"+i).style.opacity = "1";
            document.getElementById("p"+i).style.brightness = "1";
        }
    }
