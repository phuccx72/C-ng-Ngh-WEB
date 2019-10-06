$(document).ready(function () {
    $(flogin).hide();
    $(alogin).click(function (e) { 
        $(flogin).show();
        
    });

    $(btnLogin.click(function (e) { 
        $.ajax({
            type: "post",
            url: "checklogin.php",
            data: "userID.user,password.pass",
            dataType: "dataType",
            success: function (response) {
                if(dt=="OK"){
                    $('flogin').hide();
                    $('selector').hide();
                    $('logout').show();
                }
                
            }
            
        });
        
    }));
    
});
