var expect = require('chai').expect;

// Test for issues #749 #690. Using multiple root nodes or style tag at the root would
// cause an infinite loop on rerender. This code does not perform any assertions
// but it will get caught in an infinite loop without the changes in PR #751
module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    component.state.count = 1;
    component.update();
};