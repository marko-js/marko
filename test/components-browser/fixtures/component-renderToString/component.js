var helloComponent = require('./components/hello');

module.exports = {
    onMount: function () {
        this.renderedHtml = helloComponent.renderToString({
            name: this.input.name
        });
    }
};