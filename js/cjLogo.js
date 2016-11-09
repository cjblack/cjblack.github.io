var circle1 = new Path.Circle({
    center: view.center,
    radius: 30
});

circle1.fillColor = new Color(0, 0, 138);
var circle2 = new Path.Circle({
    center: [120,50],
    radius: 30
});
circle2.fillColor = new Color(42, 91, 215);

circle2.blendMode = 'source-out';

// path.on('mouseenter', function() {
//
// });
// path.on('mouseleave', function(){
//
// });
