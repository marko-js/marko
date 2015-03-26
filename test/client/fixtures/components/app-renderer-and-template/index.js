var template;

module.exports = require('marko-widgets').defineWidget({
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

// Loading the template introduces a circular dependency so move it
// below the code that reassigns module.exports. It's a hack
// but it works and is a little better than lazily loading the
// template at render time
template = require('marko').load(require.resolve('./template.marko'));