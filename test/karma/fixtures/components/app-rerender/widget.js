function Widget(config) {

}

Widget.prototype = {
    renderer: require('./renderer')
};

module.exports = Widget;