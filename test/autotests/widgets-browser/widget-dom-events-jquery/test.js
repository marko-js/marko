var expect = require('chai').expect;

module.exports = function(helpers, done) {
    require('marko/jquery').patchWidget(window.$);
    try {
        var widget = helpers.mount(require('./index'), {});
        var $el = widget.$();
        var $button = widget.$('#button');

        $el.click(function() {
            helpers.log('$el:click');
        });

        $button.click(function(event) {
            event.stopPropagation();
            helpers.log('$button:click');
        });


        // Trigger a click event on the root element
        helpers.triggerClick(widget.el);
        helpers.triggerClick(widget.getEl('button'));

        expect(helpers.logOutput).to.deep.equal([
                '$el:click',
                '$button:click'
            ]);
    } finally {
        delete require('marko/widgets/Widget').prototype.$;
    }

    done();
};