var expect = require('chai').expect;

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    init: function() {
    },
    getInitialState: function() {
        return {
            name: 'Joe'
        };
    },

    getTemplateData: function(state) {
        return state;
    },

    testPreserveAttrs: function() {
        var helloEl = this.getEl('hello');
        expect(helloEl.innerHTML).to.equal('Hello Joe!');

        this.el.style.border = "1px solid red";
        this.el.className = "foo";

        this.el.querySelector('a').href = "http://www.foo.com/";

        var self = this;

        require('marko-widgets').batchUpdate(function() {
            self.setState('name', 'Frank');
        });

        expect(helloEl.innerHTML).to.equal('Hello Frank!');

        // Make sure the preserved attributes did not change
        expect(this.el.style.border).to.equal("1px solid red");
        expect(this.el.className).to.equal("foo");
        expect(this.el.querySelector('a').href).to.equal("http://www.foo.com/");
    }
});