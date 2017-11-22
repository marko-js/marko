var myTextNodeComponent = require('./components/my-text-node');

module.exports = {
    onMount: function () {
        this.renderedHtml = myTextNodeComponent.renderToString();
    }
};