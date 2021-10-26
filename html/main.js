$( document ).ready(function() {
    $("#all").hide();
});
window.addEventListener('message', function(event) {
    
    var item = event.data;
    if (item.status == true) {
        $("#all").fadeIn();
    } else {
        $("#all").fadeOut();
    }
})

document.onkeyup = function (data) {
    if (data.which == 27) {
        $.post('http://FW-FAQ/exit', JSON.stringify({}));
        return
    }
};