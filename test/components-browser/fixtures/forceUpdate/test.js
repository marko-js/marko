module.exports = function (helpers, done) {
    var component = helpers.mount(require('./index.marko'), {});
    component.test(done);
};