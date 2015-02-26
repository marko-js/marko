var expect = require('chai').expect;

function Widget(config) {
    window.testData.addWidget('app-dom-events-jquery', this);
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

    this.triggerClick = function(el) {
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
    };

    this.log = log;
}

Widget.prototype = {
    testDOMEvents: function() {
        // Trigger a click event on the root element
        this.triggerClick(this.el);
        this.triggerClick(this.getEl('button'));

        expect(this.logOutput).to.deep.equal([
                '$el:click',
                '$button:click'
            ]);
    }
};

exports.Widget = Widget;