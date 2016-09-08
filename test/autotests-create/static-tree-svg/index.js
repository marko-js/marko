module.exports = function(helpers) {
    var linearGradient = helpers.vdom.createElement('linearGradient')
        .as({
            x1: "0%", y1: "0%", x2: "100%", y2: "0%"
        });

    linearGradient.appendChild(helpers.vdom.createElement('stop')
        .as({
            offset: "0%", style: "stop-color:rgb(255,255,0);stop-opacity:1"
        }));

    linearGradient.appendChild(helpers.vdom.createElement('stop')
        .as({
            offset: "100%", style: "stop-color:rgb(255,0,0);stop-opacity:1"
        }));

    var svg = helpers.vdom.createElement('svg')
        .as({
            height: "150", width: "400"
        });

    svg.appendChild(linearGradient);

    return svg;
};