$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        var speach = http://tts-api.com/tts.mp3?q=
        $('h1').html(lines[randLineNum]);
	$('div').html("<audio autoplay controls='controls'  src=" + speach + lines[randLineNum] + "'></audio>");
    });
});
