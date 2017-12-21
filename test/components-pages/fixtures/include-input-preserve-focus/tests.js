var path = require('path');
var expect = require('chai').expect;

describe.skip(path.basename(__dirname), function() {
    it('should update correctly', function() {
        var component = window.component;
        var input = component.getEl('input');

        document.addEventListener("focusout", (e) => {
            console.log("FOCUS OUT", e);
            debugger;
        })
        input.focus();
        expect(document.activeElement).to.eql(input);

        component.state.text = "Updated";
        component.forceUpdate();
        component.update();

        expect(document.activeElement).to.eql(input);
    });
});
