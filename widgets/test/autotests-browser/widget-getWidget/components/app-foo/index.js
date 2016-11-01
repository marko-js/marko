module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    init: function() {
        this.name = 'app-foo';
    }
});