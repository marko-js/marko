var helloComponent = require('./components/hello');

module.exports = {
    onMount: function () {
        var self = this;
        helloComponent.renderToString({
            name: this.input.name
        }, function (error, html) {
            if (error) {
                self.emit('renderError', error);
            } else {
                self.emit('html', html);
            }
        });
    }
};