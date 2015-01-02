$(document).ready(function () {
    $.get('quotes.txt', function(quotes) {
        var lines = quotes.split("\n");
        var randLineNum = getNum(lines.length);
        var speach = 'http://tts-api.com/tts.mp3?q='
        $('h1').html(lines[randLineNum]);
	   $('div').html("<audio autoplay controls='controls'  src=" + speach  + encodeURIComponent(lines[randLineNum]) + "'></audio>");
       $('h1').attr("href", "http://wferr.com/quotes/speak?quote=" + randLineNum)
    });
});

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var total = qs.split("?");
    var params = {};
    for(var i = 1; i < total.length; i++){
        var temp = total[i].split("=");
        params[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    return params;
}

function getNum(numOfLines){
	var temp = getQueryParams(document.location.search);
	var num = Math.floor(Math.random() * numOfLines);
	if(temp.quote > 0){
		num = temp.quote;
	}
	return num;
}
		
