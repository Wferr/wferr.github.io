$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $('h1').html(lines[randLineNum]);
	$('div').html("<audio autoplay controls='controls'  src='http://tts-api.com/tts.mp3?q=' + lines[randLineNum] + '></audio>");
    });
});
