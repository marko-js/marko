module.exports = {
    onMount: function () {
        this.name = 'app-foo';
        this.getComponent('bar').appendHtml('FOO');
    }
};