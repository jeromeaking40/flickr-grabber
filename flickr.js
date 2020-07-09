const url =
  "https://www.flickr.com/services/feeds/photos_public.gne?tags=puppy&format=json&jsoncallback=?";

let images = [];

let date = new Date();

$(document).ready(function () {
  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    success: function (data, status) {
      images = data.items;
      console.log(images);

      images.forEach(function (image) {
        var img = document.createElement('img');
        img.src = image.media.m;
        img.height = "45";
        img.width = "50";
        img.className = 'rounded';
        document.body.appendChild(img);
      });

    },
  });
});
