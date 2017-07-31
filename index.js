$(function () {
    $('form').submit(function (event) {

        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName + ' :input').each(function () {
            sendData[this.name] = $(this).val();
        });

        var posting = $.ajax({
            type: 'POST',
            url: '//anisland.us16.list-manage.com/subscribe/post-json?u=c1e7bdef38644dcf234cc05d7&amp;id=94e9eed170&c=?',
            data: sendData,
            dataType: 'jsonp'
        });

        posting.done(function (response) {

            $('#alert-id').prop('hidden', false);
            $('form :input').each(function () {
                $(this).val('');
            })
        });
        posting.fail(function (response) {});
    });

});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-103565092-1', 'auto');
ga('send', 'pageview');