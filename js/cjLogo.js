
var path_c = new Path.Circle({
  center: [40, 50],
  radius: 32,
  fillColor: '#0020FF',
});
var path_c1 = new Path.Circle({
  center: [80, 50],
  radius: 32,
  fillColor: '#0040FF',
});
var path_c2 = new Path.Circle({
  center: [120, 50],
  radius: 32,
    fillColor: '#0060FF',

});
var path_c3 = new Path.Circle({
  center: [160, 50],
  radius: 32,
 fillColor: '#0080FF',
});

path_c1.onMouseEnter = function(event) {
    this.shadowColor = new Color(0,0,0);
    this.shadowBlur = 12;
}
path_c1.onMouseLeave = function(event){
    this.shadowBlur = 0;
}
path_c2.onMouseEnter = function(event) {
    this.shadowColor = new Color(0,0,0);
    this.shadowBlur = 12;
}
path_c2.onMouseLeave = function(event){
    this.shadowBlur = 0;
}
path_c3.onMouseEnter = function(event) {
    this.shadowColor = new Color(0,0,0);
    this.shadowBlur = 12;
}
path_c3.onMouseLeave = function(event){
    this.shadowBlur = 0;
}
path_c.onMouseEnter = function(event) {
    this.shadowColor = new Color(0,0,0);
    this.shadowBlur = 12;
}
path_c.onMouseLeave = function(event){
    this.shadowBlur = 0;
}

path_c1.blendMode = 'hue';

path_c2.blendMode = 'hue';


path_c3.blendMode = 'hue';
