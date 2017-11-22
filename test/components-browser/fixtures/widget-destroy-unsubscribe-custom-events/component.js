module.exports = {
    destroyButton1: function (size) {
        this.getComponent('button1').destroy();
    },

    getButton1: function () {
        return this.getComponent('button1');
    }
};