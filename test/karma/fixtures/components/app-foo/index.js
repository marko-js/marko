// Export a render(input) method that can be used
// to render this UI component on the client or server
exports.render = require('raptor-renderer')
    .createRenderFunc(require('./renderer'));