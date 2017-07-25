$(function () {

    // on submitting the form
    $('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName + ' :input').each(function(){
            sendData[this.name] = $(this).val();
        });

        var posting = $.ajax({
            type: 'POST',
            url: $(event.target.nodeName).prop('action'),
            data: sendData
        });

        posting.done(function (response) {
            console.log(response);
            $('#alert-id').prop('hidden', false);
            $('form :input').each(function(){
                $(this).val('');
            })
        });
        posting.fail(function (response) {
            console.log(response);
        });
    });

});