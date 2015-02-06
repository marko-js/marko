var expect = require('chai').expect;

function Widget(config) {
    window.testData['app-dom-events-jquery'] = this;
    this.name = 'app-dom-events-jquery';

    var $el = this.$();
    var $button = this.$('#button');

    var logOutput = this.logOutput = [];

    function log(data) {
        logOutput.push(data);
    }

    $el.click(function() {
        log('$el:click');
    });

    $button.click(function(event) {
        event.stopPropagation();
        log('$button:click');
    });

    function triggerClick(el) {
        var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(
            "click",
            true /* bubble */, true /* cancelable */,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, null
        );
        el.dispatchEvent(ev);
    }

    // Trigger a click event on the root element
    triggerClick(this.el);
    triggerClick(this.getEl('button'));

    expect(logOutput).to.deep.equal([
            '$el:click',
            '$button:click'
        ]);

    this.log = log;
}

Widget.prototype = {
};

module.exports = Widget;