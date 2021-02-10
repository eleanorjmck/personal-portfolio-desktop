

// STARTING PAGE
$('.title').hide().delay(200).fadeIn(1000);
$('.main-title').hide().delay(200).fadeIn(1000);
$('.heading-1').hide().delay(200).fadeIn(1000).fadeOut(1000);
$('.heading-2').hide().delay(200).fadeIn(1000).fadeOut(1000);
$('.heading-3').hide().delay(200).fadeIn(1000).fadeOut(1000);
$('.heading-4').hide().delay(200).fadeIn(1000).fadeOut(1000);
$('.heading-5').hide().delay(200).fadeIn(1000).fadeOut(1000);

$('.content-box').hide().delay(200).fadeIn(800);
$('.intro-text').hide().delay(1000).fadeIn(1000);

$('.fade-btn-7000').hide().delay(7000).fadeIn(800);

// ARTISTS/ARTWORK PAGE
$('.banner').hide().delay(1000).fadeIn(800);
$('.fade-btn-2000').hide().delay(2000).fadeIn(800);
$('.fade-btn-3000').hide().delay(3000).fadeIn(800);

// FEATURED WORK PAGE
$('.featured-1').hide().delay(500).fadeIn(1200);
$('.featured-2').hide().delay(1000).fadeIn(1200);
$('.featured-3').hide().delay(1500).fadeIn(1200);
$('.featured-4').hide().delay(2000).fadeIn(1200);
$('.fade-btn-2500').hide().delay(2500).fadeIn(800);

// LEARN MORE PAGE
$('.artist-web').hide().delay(500).fadeIn(1200);
$('.written-works').hide().delay(1000).fadeIn(1200);
$('.explore').hide().delay(1500).fadeIn(1200);


var p = $(".popup__overlay");

$("#popup__toggle").click(function() {
  p.css("display", "block");
});
p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p).css("display", "none");
  }
});
$(".popup__close").click(function() {
  p.css("display", "none");
});

//video popup
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("popupVid");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'hide' ? 'none' : '';
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

$("#popup__toggle").click(function() {
  p.css("visibility", "visible").css("opacity", "1");
});

p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo("hide");
  }
});

$(".popup__close").click(function() {
  p.css("visibility", "hidden").css("opacity", "0");
  toggleVideo("hide");
});

