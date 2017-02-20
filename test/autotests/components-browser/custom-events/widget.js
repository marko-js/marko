module.exports = {
    onMount: function() {
        this.name = 'app-foo';
        this.getWidget('bar').appendHtml('FOO');
    }
};