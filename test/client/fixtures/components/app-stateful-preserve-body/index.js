var expect = require('chai').expect;

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
            buttonLabel: 'Initial Button Label'
        };
    },
    getTemplateData: function(state, input) {
        return {
            buttonLabel: state.buttonLabel
        };
    },


    testPreserveBody: function() {
        var button1Widget = this.getWidget('button1');

        expect(button1Widget.el.innerHTML).to.equal('Initial Button Label');
        expect(button1Widget.el.className).to.contain('large');

        require('marko-widgets').batchUpdate(function() {
            button1Widget.setSize('small');
        });

        expect(button1Widget.el.innerHTML).to.equal('Initial Button Label');
        expect(button1Widget.el.className).to.contain('small');


        var self = this;

        require('marko-widgets').batchUpdate(function() {
            self.setState('buttonLabel', 'New Button Label');
        });

        expect(button1Widget.el.innerHTML).to.equal('New Button Label');
        expect(button1Widget.el.className).to.contain('large'); // Size will revert back to large since it was not driven by state

    }
});