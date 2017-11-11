module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    init: function() {
        window.barWidget = this;
    }
});