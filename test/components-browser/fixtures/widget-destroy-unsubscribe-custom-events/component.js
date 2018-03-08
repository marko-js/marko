module.exports = {
    destroyButton1: function () {
        this.getComponent('button1').destroy();
    },

    getButton1: function () {
        return this.getComponent('button1');
    }
};