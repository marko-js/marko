function Widget() {
    var child = this.widgets.child;
    child.doSomething();
}

Widget.prototype = {

};

module.exports = Widget;