var count = $(('#count'));
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 5000,
  easing: 'linear',
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});


var htmls = Snap('#animated1');

var html1 = htmls.select('#html1');

html1.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,240, function( value ) {
    html1.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);


var csss = Snap('#animated2');

var css1 = csss.select('#css1');

css1.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,245, function( value ) {
    css1.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);

var javas = Snap('#animated3');

var javas1 = javas.select('#javas1');

javas1.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,110, function( value ) {
    javas1.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);

var phps = Snap('#animated4');

var php1 = phps.select('#php1');

php1.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,130, function( value ) {
    php1.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);