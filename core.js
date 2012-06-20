$(document).ready(function() {  


$('.port_btn').click(function () {
       $('#portfolio').css({
            display: "block",
            borderBottom: "1px solid #adadad",
            borderTop: "1px solid #adadad"
        });
           $('#portfolio .inner .partner').css({
            display: "block"
        });
            $('#portfolio .inner').css({
            paddingTop: "100px"
        });
       $('#head_area').css({
            borderBottom: "none"
        });
        $('#portfolio').animate({
            height: "300px"
        }, 500);
        $('#head_area, .banner_bg').animate({
            marginTop: "-200px",
            opacity: "0.4"
        }, 500);

         $('#portfolio .inner').animate({
            opacity: "1",
        }, 200);
         $('.btn_close').delay(600).animate({
            opacity: "1",
            marginTop: "-5px" 
        }, 300);
        
    });

$('.btn_close').click(function () {
       $('#head_area').css({
            borderBottom: "1px solid #00638b"
        });
       $('#portfolio').animate({
            height: "0px",
        }, 700);

         $('#portfolio .inner').animate({
            opacity: "0",
        }, 200);
        $('.btn_close').animate({
            opacity: "0",
            marginTop: "0px"
        }, 500);
        $('#head_area').animate({
            marginTop: "0px",
            opacity: "1"
        }, 700);

        $('.banner_bg').animate({
            opacity: "0.8",
            marginTop: "0px"
        }, 700);
        $('#portfolio').css({
            border: "none",
        });
        $('#portfolio .inner').css({
            paddingTop: "0px"
        });
          $('#portfolio .inner .partner').css({
            display: "none"
        });
        
    });

});

