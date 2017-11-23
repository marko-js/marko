var hooks = [];

module.exports = {
    record: function (name) {
        hooks.push(name);
    },

    reset: function () {
        hooks.length = 0;
    },

    getHookNames: function (component) {
        return hooks;
    }
};