function Widget(config) {

}

Widget.prototype = {
    render: require('./renderer')
};

module.exports = Widget;