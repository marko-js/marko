module.exports = function(helpers) {
    let changes = [
        [7],
        [9],
        [6],
        [0],
        [18],
        [19],
        [4],
        [19],
        [3],
        [1],
        [18],
        [19],
        [9],
        [6],
        [4],
        [5],
        [15],
        [1],
        [9],
        [6],
        [15],
        [7],
        [19],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    var component = helpers.mount(require.resolve("./index.marko"), {});

    changes.forEach(array => {
        component.array = array;
        component.forceUpdate();
        component.update();
    });
};
