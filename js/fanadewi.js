$("#submit-button").click(function() {
    $("#submit-button").attr("disabled", true);
    
    if($("#message-field").val() == ""){
        $("#submit-button").attr("disabled", false);
        alert("You should enter your message first!");
    } else {
        $.ajax('https://ana-mailer.herokuapp.com/message', {
            type: 'POST',
            data: {message: $("#message-field").val()},
            success: function (result) {
                console.log(result)
                alert("Thanks for the message, it's really sent to Ana!");
            },
            error: function (err) {
                console.log(err)
                alert("Ouch the mailer is down >.< but still, Thanks for the message!");
                }
        });
        // reset form
        $("#message-field").val("")
        $("#submit-button").attr("disabled", false);
    }
});