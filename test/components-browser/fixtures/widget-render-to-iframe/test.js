module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});
    component.test(helpers);
};