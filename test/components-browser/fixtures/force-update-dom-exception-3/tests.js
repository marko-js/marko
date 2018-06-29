var path = require("path");

describe.only(path.basename(__dirname), function() {
    it.fails("should update correctly", function() {
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

        var component = window.appComponent;

        changes.forEach(array => {
            component.array = array;
            component.forceUpdate();
            component.update();
        });
    }).details =
        "issue #1059";
});
