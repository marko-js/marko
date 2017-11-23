var expect = require('chai').expect;

module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),

    init: function () {
        this.logOutput = [];

        this.name = 'app-dom-events';

        var slef = this;
        function log(data) {
            slef.logOutput.push(data);
        }

        this.log = log;
        this.clearLog = function () {
            this.logOutput = [];
        };

        this.logOutput = [];
    },

    handleFooLinkDblClick: function () {
        this.log('#fooLink:dblclick');
    },

    handleFooLinkMouseOut: function (event, el) {
        expect(event.target).to.equal(el);
        this.log('#fooLink:mouseout');
    }
});