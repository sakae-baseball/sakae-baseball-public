
var showTicker = function(){
  $.ajax({
    type: "GET",
    url: "https://newssakaebaseball.azurewebsites.net/",
    dataType: 'xml',
    beforeSend:   function (xhr) {
      xhr.setRequestHeader('Access-Control-Allow-Origin', 'sakae-baseball.org');
    },
    success: function(data) {
	var ul = $("#news");
        var i=0;
        $(data).find('item').each(function(){
            ul.append("<li><a class=\"btn btn-danger btn-block\" href=\"https://news.sakae-baseball.org/\"  role=\"button\">" + escapeHTML2($(this).find('title').text()) + "</a></li>");
            i++;
            if (i >= 2) {
                return false;
	    }
	});
     }

  });
};

function escapeHTML2(html) {
  return jQuery('<div>').text(html).html();
}

function ticker(){
  $('#news li:first').slideUp( function(){
    $(this).appendTo($('#news')).slideDown();
  });
}


$(document).ready(function(){
  showTicker();
  setInterval(function(){ticker()}, 5000);
});

