$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $('h1').html(lines[randLineNum]);
		$('div').html("<audio autoplay controls='controls'  src='http://translate.google.com/translate_tts?tl=en&q=' + 'hi' + '></audio>"); 
    });
});
