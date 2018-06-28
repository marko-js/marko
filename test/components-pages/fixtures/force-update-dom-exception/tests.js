var path = require("path");
var expect = require("chai").expect;

describe.only(path.basename(__dirname), function() {
    it.fails("should update correctly", function() {
        function copy(source, dest) {
            for (let i = 0; i < source.length; i++) {
                dest[i] = source[i];
            }
        }

        var component = window.appComponent;

        copy([13, 13, 3], component.array);

        component.forceUpdate();
        component.update();

        copy([9, 7, 12], component.array);

        component.forceUpdate();

        expect(() => {
            component.update();
        }).to.not.throw();
    }).details =
        "issue #1059";
});
