$(document).ready(function(){
    $("#response-container").css("display","none");
    $("#number-area").attr("disabled", "disabled");
    

    $('#call-icon').click(function(){
        if($('#number-area').val().length>0){
            call();
            $('#resp-name').html("");
            $('#resp-number').html($('#number-area').val());
        }       
    });

    $('#dialer-table td').click(function(){
        $('#number-area').val($('#number-area').val()+$(this).html());
    });

    $('#btnCancel').click(function(){
        $("#response-container").css("display","none");
        $("#dialer-container").css("display","block");
    });

    $('#btnOk').click(function(){
        $("#call-timer").css("display","block");

        //setInterval(function(){},1000)
    });

    $('.contact-click').click(function(){
        call();   
        var name= $(this).children('span').children('.contact-info-name').text();
        var number=$(this).children('span').children('.contact-info-number').text();
        $('#resp-name').html(name);   
        $('#resp-number').html(number);
    });

    function call(){
        $("#response-container").css("display","block");
        $("#dialer-container").css("display","none");
        $("#call-timer").css("display","none");
    }
});
