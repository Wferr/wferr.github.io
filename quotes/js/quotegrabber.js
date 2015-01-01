$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $('h1').html(lines[randLineNum]);
    });
});