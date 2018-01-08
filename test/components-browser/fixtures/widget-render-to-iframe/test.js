module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    component.test(helpers);
};