$('#clickButton').on('click', function() {
    // console.log('success click')

    // $.ajax(); ajax complite dan bisa costume
    $.ajax({
        type: 'GET',
        url: 'ajax.php',
        success: function(response) {
            $('#response').html('Success Insert').delay(2000).fadeOut(700);
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });

});
// : type file