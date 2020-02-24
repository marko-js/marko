module.exports = function(helpers, done) {
    require("marko/ready").patchComponent();

    try {
        var component = helpers.mount(require.resolve("./index"), {});

        component.ready(function() {
            done();
        });
    } finally {
        delete require("marko/runtime/components/Component").prototype.ready;
    }
};
