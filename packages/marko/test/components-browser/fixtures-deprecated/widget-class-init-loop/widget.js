function Widget() {
  this.init();
}
Widget.prototype.init = function() {
  this.foo = 123;
};

module.exports = Widget;
