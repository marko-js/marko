var expect = require("chai").expect;

module.exports = function() {
    var defineComponent = require("marko/runtime/components/legacy")
        .defineComponent;
    expect(function() {
        defineComponent({
            // template: require.resolve('./template.marko'),

            getTemplateData: function(state, input) {
                return {
                    name: input.name,
                    messageCount: input.messageCount
                };
            }
        });
    }).to.throw(/Expected "template"/);
};
