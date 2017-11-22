var expect = require('chai').expect;

module.exports = function (helpers, done) {
    require('marko/jquery').patchComponent(window.$);
    try {
        var component = helpers.mount(require('./index'), {});
        var $el = component.$();
        var $button = component.$('#button');

        $el.click(function () {
            helpers.log('$el:click');
        });

        $button.click(function (event) {
            event.stopPropagation();
            helpers.log('$button:click');
        });

        // Trigger a click event on the root element
        helpers.triggerClick(component.el);
        helpers.triggerClick(component.getEl('button'));

        expect(helpers.logOutput).to.deep.equal(['$el:click', '$button:click']);
    } finally {
        delete require('marko/components/Component').prototype.$;
    }

    done();
};