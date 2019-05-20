module.exports = function(helpers) {
    var svg = helpers.vdom.createElement(
        "svg",
        { height: "150", width: "400" },
        null
    );

    var linearGradient = helpers.vdom.createElement(
        "linearGradient",
        { x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
        null
    );

    svg.___appendChild(linearGradient);

    linearGradient.___appendChild(
        helpers.vdom.createElement(
            "stop",
            { offset: "0%", style: "stop-color:rgb(255,255,0);stop-opacity:1" },
            null
        )
    );

    linearGradient.___appendChild(
        helpers.vdom.createElement(
            "stop",
            { offset: "100%", style: "stop-color:rgb(255,0,0);stop-opacity:1" },
            null
        )
    );

    return svg;
};
