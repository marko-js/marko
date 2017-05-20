// Export a render(input) method that can be used
// to render this UI component on the client or server
require('marko/legacy-components').renderable(exports, require('./renderer'));