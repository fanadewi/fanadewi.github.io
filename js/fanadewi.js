$("#submit-button").click(function() {
    $("#submit-button").attr("disabled", true);
    
    if($("#message-field").val() == ""){
        $("#submit-button").attr("disabled", false);
        alert("You should enter your message first!");
    } else {
        // TODO: send real message to me
        alert("Thanks for the message, it's not really sent yet, but still, thanks! " + $("#message-field").val());

        // reset form
        $("#message-field").val("")
        $("#submit-button").attr("disabled", false);
    }
});