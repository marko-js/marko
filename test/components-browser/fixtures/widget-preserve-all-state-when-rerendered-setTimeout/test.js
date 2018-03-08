var expect = require("chai").expect;

module.exports = function(helpers, done) {
    var component = helpers.mount(require.resolve("./index"), {
        name: "Frank",
        count: 30
    });

    var targetEl = component.el;

    setTimeout(function() {
        component.setState("count", 100);
        component.update();
        expect(component.state.count).to.equal(100);
        expect(targetEl.innerHTML).to.contain(
            "Hello Frank! You have 100 new messages."
        );
    }, 100);

    setTimeout(function() {
        component.setState("count", 200);
        component.update();
        expect(component.state.count).to.equal(200);
        expect(targetEl.innerHTML).to.contain(
            "Hello Frank! You have 200 new messages."
        );
        done();
    }, 200);

    setTimeout(function() {
        component.setState("count", 1);
        component.update();
        expect(component.state.count).to.equal(1);
        expect(targetEl.innerHTML).to.contain(
            "Hello Frank! You have 1 new messages."
        );
    }, 1);
};
