module.exports = function(helpers, done) {
    require('marko/ready').patchWidget();

    try {
        var widget = helpers.mount(require('./index'), {});

        widget.ready(function() {
            done();
        });
    } finally {
        delete require('marko/widgets/Widget').prototype.ready;
    }
};