var componentsUtil = require('./util');
var initComponents = require('./init-components');

require('./ComponentsContext').___initClientRendered = initComponents.___initClientRendered;

exports.getComponentForEl = componentsUtil.___getComponentForEl;
exports.init = initComponents.___initServerRendered;
