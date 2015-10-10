var unicorn = function(){
    var imgs = document.getElementsByTagName("img");
    for (var i = imgs.length - 1; i >= 0; i--) {
        var img = imgs[i];
        var width = img.width;
        var random = Math.random();
        img.src = 'http://unicornify.appspot.com/avatar/' + random + '?s=' + width;
    };
};

unicorn();
setInterval(function(){
	unicorn();
},60000);

