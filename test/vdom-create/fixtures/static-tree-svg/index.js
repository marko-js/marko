module.exports = function (helpers) {

    var FLAGS = 1; // SVG
    var linearGradient = helpers.vdom.createElement('linearGradient', { x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, null, FLAGS);

    linearGradient.___appendChild(helpers.vdom.createElement('stop', { offset: "0%", style: "stop-color:rgb(255,255,0);stop-opacity:1" }, null, FLAGS));

    linearGradient.___appendChild(helpers.vdom.createElement('stop', { offset: "100%", style: "stop-color:rgb(255,0,0);stop-opacity:1" }, null, FLAGS));

    var svg = helpers.vdom.createElement('svg', { height: "150", width: "400" }, null, FLAGS);

    svg.___appendChild(linearGradient);

    return svg;
};