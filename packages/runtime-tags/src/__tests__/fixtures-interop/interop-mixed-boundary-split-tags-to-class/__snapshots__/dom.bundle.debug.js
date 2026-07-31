// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var import_component_browser = /* @__PURE__ */ __toESM(require_component_browser());
(0, import_components.register)("__tests__/components/split-counter/index.marko", import_component_browser.default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/split-counter/component-browser.js
var require_component_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class {
		handleClick() {
			const el = this.getEl();
			el.setAttribute("data-count", Number(el.getAttribute("data-count")) + 1);
		}
	};
}));

// components/split-counter/index.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_component_browser = /* @__PURE__ */ __toESM(require_component_browser());
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/split-counter/index.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => import_component_browser.default);
const _marko_component = {};
import_component_browser.default.renderer = _marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", {
		"id": "class-api",
		"data-count": "0"
	}, "0", _component, null, 0, { "onclick": _componentDef.d("click", "handleClick", false) });
	out.t("click", _component);
	out.ee();
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=bump> </button><!><!><!>";
const $walks = " D l%b%c";
_resume("__tests__/components/split-counter/index.marko", _marko_template);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $n = /*@__PURE__*/ _let("n/4", ($scope) => {
	_text($scope, "#text/1", $scope.n);
	$dynamicTag2($scope, _marko_template, () => ({ count: $scope.n }));
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$dynamicTag($scope, _marko_template);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
