// tags/tags-child.marko
var import_vdom = require_vdom();
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var tags_child_default = /*@__PURE__*/ _template("c", $template, "D l", 0, $input);

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
const $x = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $y = /*@__PURE__*/ _let(3, ($scope) => {
	$dynamicTag($scope, _marko_template, () => ({ value: $scope.d }));
	$x($scope, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$y($scope, +$scope.d + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
