// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/class-display.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-display.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "display" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=tags>Tags</button><!><!>";
const $walks = " b%c";
_resume("__tests__/components/class-display.marko", _marko_template);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $msg__script = _script("__tests__/template.marko_0_msg", ($scope) => _on($scope["#button/0"], "click", function() {
	$msg($scope, $scope.msg + "!");
}));
const $msg = /* @__PURE__ */ _let("msg/2", ($scope) => {
	$dynamicTag($scope, _marko_template, () => ({ value: $scope.msg }));
	$msg__script($scope);
});
function $setup($scope) {
	$msg($scope, "hi");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
