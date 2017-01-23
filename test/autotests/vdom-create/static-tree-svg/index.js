module.exports = function(helpers) {
    var linearGradient = helpers.vdom.createElement('linearGradient', { x1: "0%", y1: "0%", x2: "100%", y2: "0%" });

    linearGradient.$__appendChild(helpers.vdom.createElement('stop', { offset: "0%", style: "stop-color:rgb(255,255,0);stop-opacity:1" }));

    linearGradient.$__appendChild(helpers.vdom.createElement('stop', { offset: "100%", style: "stop-color:rgb(255,0,0);stop-opacity:1" }));

    var svg = helpers.vdom.createElement('svg', { height: "150", width: "400" });

    svg.$__appendChild(linearGradient);

    return svg;
};