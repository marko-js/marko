// components/split-display/component-browser.js
var require_component_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {};
}));

// components/split-display/index.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_component_browser = /* @__PURE__ */ __toESM(require_component_browser());
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => import_component_browser.default);
const _marko_component = {};
import_component_browser.default.renderer = _marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class-api" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	s: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
_resume("b", _marko_template);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $count = /* @__PURE__ */ _let(2, ($scope) => $dynamicTag($scope, _marko_template, () => ({ value: $scope.c })));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
(0, import_components.register)("b", import_component_browser.default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
