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
                alert("The message sent in background, hope it's really sent. Thanks for the message!");
            },
            error: function (err) {
                console.log(err)
                alert("The message failed to sent, but still, Thanks for the message!");
                }
        });
        // reset form
        $("#message-field").val("")
        $("#submit-button").attr("disabled", false);
    }
});
