var circle1 = new Path.Circle({
    center: view.center,
    radius: 10,
    strokeColor: 'blue',
});

function onResize(event){
  path.position = view.center;
}
// circle1.fillColor = new Color(0, 0, 138);
// var circle2 = new Path.Circle({
//     center: [120,50],
//     radius: 35
// });
// circle2.fillColor = new Color(42, 91, 215);
//
// circle2.blendMode = 'source-out';

// path.on('mouseenter', function() {
//
// });
// path.on('mouseleave', function(){
//
// });
