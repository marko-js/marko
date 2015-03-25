var expect = require('chai').expect;

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
            buttonSize: input.buttonSize || 'normal'
        };
    },
    getTemplateData: function(state, input) {
        return {
            buttonSize: state.buttonSize
        };
    },

    setButtonSize: function(size) {
        this.setState('buttonSize', size);
    },

    testReuseWidgets: function() {
        var oldButton1Widget = this.getWidget('button1');
        var oldButton2Widget = this.getEl('button2').__widget;
        var oldButton1El = oldButton1Widget.el;
        var oldButton2El = this.getEl('button2');

        expect(this.getWidget('button1').getBodyEl().innerHTML).to.equal('normal');

        var self = this;

        require('marko-widgets').batchUpdate(function() {
            self.setButtonSize('small');
            self.rerender();
        });

        var newButton1El = this.getWidget('button1').el;
        var newButton2El = this.getEl('button2');

        // // Both button widgets should be reused
        expect(this.getWidget('button1')).to.equal(oldButton1Widget);
        expect(this.getEl('button2').__widget).to.equal(oldButton2Widget);

        expect(this.getWidget('button1').getBodyEl().innerHTML).to.equal('small');


        // // State changed for button1 so it should have a new el
        // // since it re-renders to update its view
        // console.log('newButton1El: ', newButton1El);
        expect(newButton1El !== oldButton1El).to.equal(true);

        //
        // // State didn't change for button2 so it should be the same el
        expect(newButton2El).to.equal(oldButton2El);

    }
});