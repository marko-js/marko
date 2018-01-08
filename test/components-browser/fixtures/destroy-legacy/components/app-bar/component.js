module.exports = {
    onInput: function (input) {
        var label = input.label || 'BAR';
        this.label = label;
    },

    onMount: function () {
        this.name = 'app-bar';

        var el = this.el;

        this.appendHtml = function (html) {
            el.innerHTML += html;
        };
    }
};