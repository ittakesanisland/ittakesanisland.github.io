$(function () {

    // on submitting the form
    $('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName + ' :input').each(function () {
            sendData[this.name] = $(this).val();
        });

        var posting = $.ajax({
            type: 'POST',
            url: '//anisland.us16.list-manage.com/subscribe/post?u=c1e7bdef38644dcf234cc05d7&amp;id=94e9eed170&c=?',
            data: $('form').serialize(),
            dataType: 'jsonp'
        });

        posting.done(function (response) {
            console.log(response);
            $('#alert-id').prop('hidden', false);
            $('form :input').each(function () {
                $(this).val('');
            })
        });
        posting.fail(function (response) {
            console.log(response);
        });
    });

});