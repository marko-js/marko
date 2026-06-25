// components/split-button/component-browser.js
var import_registry = require_registry();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_vdom = require_vdom();
var component_browser_default = class {
	handleClick(e) {
		this.emit("click", e);
	}
};

// components/split-button/index.marko
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => component_browser_default);
const _marko_component = {};
component_browser_default.renderer = _marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class-api" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "handleClick", false) });
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	s: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $splitbutton_content = _content_resume("a1", "Reset", "b");
const $msg = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
function $onClick($scope) {
	return function() {
		$msg($scope, "");
	};
}
_resume("a0", $onClick);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
(0, import_components.register)("b", component_browser_default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
