module.exports = require('marko/components/legacy').defineComponent({
    template: require('./template.marko'),

    init: function() {
        this.name = 'app-foo';
    }
});