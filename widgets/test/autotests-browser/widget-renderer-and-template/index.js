var template = require('marko').load(require.resolve('./template.marko'));

module.exports = require('marko-widgets').defineComponent({
    createOut: template.createOut,

    renderer: function(input, out) {
        template.render({
                name: input.name
            },
            out);
    },

    setName: function(name) {
        this.getEl('name').innerHTML = name;
    }
});
