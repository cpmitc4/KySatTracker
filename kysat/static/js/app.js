//
// app.js - KySat Specific Client Application Code
//

var modal_visible = 0;
var loadingEnabled = true;

$(document).ready( function() {

    if(loadingEnabled) {
    // Loading Screen
        $('#loading .load-logo').fadeIn(2000);
        $('#loading .load-progress').delay(1500).fadeIn(500);
        $('#loading .load-progress .load-fill').delay(2000).animate({width:'100%'}, 1000, function() {
            $('#loading').fadeOut(1500, function() {
                $('#loading').remove();
            });
        });
    }
    else $('#loading').remove();

    // Close Modal
    $('#modal-container a.close-btn').click( function() {
        $('#modal-container').fadeOut();
    });

    // Show About
    $('#run-about').click( function() {
        $("#modal-container iframe.modal-content").attr("src", "/about");
        $('#modal-container').fadeIn();
    });

    // Show Blog
    $('#run-blog').click( function() {
        $("#modal-container iframe.modal-content").attr("src", "/blog");
        $('#modal-container').fadeIn();
    });

    // Show Gallery
    $('#run-gallery').click( function() {
        $("#modal-container iframe.modal-content").attr("src", "/gallery");
        $('#modal-container').fadeIn();
    });

});
