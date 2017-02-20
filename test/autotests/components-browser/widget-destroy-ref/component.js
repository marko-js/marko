module.exports = {
    destroyButton1: function(size) {
        this.getWidget('button1').destroy();
    },

    getButton1: function() {
        return this.getWidget('button1');
    }
};