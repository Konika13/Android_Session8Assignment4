 
 $(document).ready(function(){
        $("button:first").click(function(){
            $("a").attr("href","http://www.google.co.in/");
        });
    });
     $(document).ready(function(){
        $("button:last").click(function(){
            $("a").text("Google");
        });
    });