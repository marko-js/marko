var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should update correctly", function() {
        var component = window.component;
        var $el = component.getEl("root");

        expect($el.innerHTML).to.eql("");

        component.append("a");
        component.update();
        expect($el.innerHTML).to.eql('<li id="a"><span>a</span></li>');

        component.append("b");
        component.update();
        expect($el.innerHTML).to.eql(
            '<li id="a"><span>a</span></li><li id="b"><span>b</span></li>'
        );
    });
});
