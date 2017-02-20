module.exports = function(helpers, done) {
    var widget = helpers.mount(require('./index.marko'), {});
    widget.test(done);
};