module.exports = {
    onMount: function() {
        this.name = 'app-bar';

        var el = this.el;

        this.appendHtml = function(html) {
            el.innerHTML += html;
        };
    },

    emitTestEvent: function() {
        this.emit('testEvent', 'a', 'b');
    }
};