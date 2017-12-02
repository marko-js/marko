$_mod.def("/marko$4.7.4/src/components/index-browser", function(require, exports, module, __filename, __dirname) { var componentsUtil = require('/marko$4.7.4/src/components/util-browser'/*'./util'*/);
var initComponents = require('/marko$4.7.4/src/components/init-components-browser'/*'./init-components'*/);
var registry = require('/marko$4.7.4/src/components/registry-browser'/*'./registry'*/);

require('/marko$4.7.4/src/components/ComponentsContext'/*'./ComponentsContext'*/).___initClientRendered = initComponents.___initClientRendered;

exports.getComponentForEl = componentsUtil.___getComponentForEl;
exports.init = window.$initComponents = initComponents.___initServerRendered;

exports.register = function(id, component) {
    registry.___register(id, function() { return component; });
};
});