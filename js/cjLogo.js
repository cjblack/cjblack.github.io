var path = new Path.Circle({
  center: [80, 50],
  radius: 35
});
// Set the name of the path:
path.name = 'example';

// Create a group and add path to it as a child:
var group = new Group();
group.addChild(path);

// The path can be accessed by name:
group.children['example'].fillColor = 'blue';


// var circle1 = new Path.Circle({
//     center: view.center,
//     radius: 30
// });
//
// circle1.fillColor = new Color(0, 0, 138);
// var circle2 = new Path.Circle({
//     center: [120,50],
//     radius: 30
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
