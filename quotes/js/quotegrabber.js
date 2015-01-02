$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = getNum(lines.length);
        var speach = 'http://tts-api.com/tts.mp3?q='
        $('h1').html(lines[randLineNum]);
	$('div').html("<audio autoplay controls='controls'  src=" + speach  + encodeURIComponent(lines[randLineNum]) + "'></audio>");
    });
});

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}

function getNum(numOfLines){
	var temp = getQueryParams(document.location.search);
	var num = Math.floor(Math.random() * numOfLines);
	if(temp.length > 0){
		num = temp.quote;
	}
	return num;
}
		
