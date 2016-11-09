var path_c1 = new Path.Circle({
  center: [80, 50],
  radius: 35
});
// Set the name of the path:
path_c1.name = 'example';

// Create a group and add path to it as a child:
var group = new Group();
group.addChild(path_c1);

// The path can be accessed by name:
group.children['example'].fillColor = '#0000FF';

var path_c2 = new Path.Circle({
  center: [120, 50],
  radius: 35
});
// Set the name of the path:
path_c2.name = 'example1';

// Create a group and add path to it as a child:
var group2 = new Group();
group2.addChild(path_c2);
group2.children['example1'].fillColor = '#0099FF';
group2.children['example1'].blendMode = 'color-burn';

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
