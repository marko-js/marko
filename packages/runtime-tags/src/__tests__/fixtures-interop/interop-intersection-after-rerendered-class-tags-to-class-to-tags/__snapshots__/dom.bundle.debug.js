// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// tags/tags-child.marko
var import_vdom = require_vdom();
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $input_value__OR__doubled = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.input_value + ":" + $scope.doubled));
const $doubled = /*@__PURE__*/ _const("doubled", $input_value__OR__doubled);
const $n = /*@__PURE__*/ _let("n/5", ($scope) => $doubled($scope, $scope.n * 2));
const $setup__script$1 = _script("__tests__/tags/tags-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__doubled);
const $input = ($scope, input) => $input_value($scope, input.value);
var tags_child_default = /*@__PURE__*/ _template("__tests__/tags/tags-child.marko", $template$1, $walks$1, $setup$1, $input);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-wrap.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": input.value }), null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
_resumed["__tests__/components/class-wrap.marko"] = _marko_template;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $y = /*@__PURE__*/ _let("y/2", ($scope) => $dynamicTag($scope, _marko_template, () => ({ value: $scope.y })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, +$scope.y + 1);
}));
function $setup($scope) {
	$y($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
