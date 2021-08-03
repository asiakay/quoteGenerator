function randomQuote() {
    $.ajax({
        // sending request to get api data in json from url 
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        // method=getQuote&key=457653&format=xml&lang=en
        //         data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (quoteData) {
            if (quoteData.quoteAuthor === ''){
                quoteData.quoteAuthor= 'Unknown';
            };

            $("#randomQuote").html("<p id='randomQuote' /><i class=\"fa fa-quote-left\"></i>    " 
            + quoteData.quoteText + " <i class=\"fa fa-quote-right\"></i> <p/>")
            
            $("#author").html("<p id=\"author\" class=\"text-right\"> ‐" 
            + quoteData.quoteAuthor + "</p>");

            $("#tweetMe").attr("href", "https://twitter.com/share?ref_src=twsrc%5Etfw" 
            + quoteData.quoteText + ' - ' + quoteData.quoteAuthor);
        }
    });
}


function randomColor(){
    var colors = [
        '#252140',
        '#112359',
        '#ABB7B7',
        '#336E7B',
        '#8E44AD',
        '#674172',
        '#D2527F',
        '#96281B',
        '#34495e',
        '#16a085',
        '#f39c12',
        '#d35400',
        '#c0392b',
        '#7f8c8d',
        '#8e44ad'
    ];
    var choosedColor = colors[(Math.floor(Math.random() * 16))];
    return choosedColor;
}



$(function (){
    randomQuote();
    randomColor();
});

$("#newQuote").click(function (){
    $('body').css({'background' : randomColor(), 'transition' : 'all linear 3.6s'});
    randomQuote();
});
