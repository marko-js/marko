// tags/tags-child.marko
var import_vdom = require_vdom();
const $template = "<button> </button>";
const $walks = " D l";
const $input_value__OR__doubled = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.e + ":" + $scope.g));
const $doubled = /*@__PURE__*/ _const(6, $input_value__OR__doubled);
const $n = /*@__PURE__*/ _let(5, ($scope) => $doubled($scope, $scope.f * 2));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_value = /*@__PURE__*/ _const(4, $input_value__OR__doubled);
const $input = ($scope, input) => $input_value($scope, input.value);
var tags_child_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": input.value }), null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
_resumed.b = _marko_template;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $y = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, _marko_template, () => ({ value: $scope.c })));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$y($scope, +$scope.c + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
