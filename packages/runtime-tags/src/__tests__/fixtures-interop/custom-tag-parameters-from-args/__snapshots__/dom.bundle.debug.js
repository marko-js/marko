// components/custom-tag.marko
var import_vdom = require_vdom();
const $template = "<button class=inc><!>,<!></button><!><!>";
const $walks = " D%c%l%c";
const $x__OR__y__script = _script("__tests__/components/custom-tag.marko_0_x_y", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
	$y($scope, $scope.y + 1);
}));
const $x__OR__y = /* @__PURE__ */ _or(9, $x__OR__y__script);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/3", 0, 0, 1);
const $input_content__OR__x__OR__y = /* @__PURE__ */ _or(10, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.x, $scope.y]), 2);
const $x = /* @__PURE__ */ _let("x/7", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let("y/8", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
function $setup($scope) {
	$x($scope, 1);
	$y($scope, 10);
}
const $input_content = /* @__PURE__ */ _const("input_content", $input_content__OR__x__OR__y);
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /* @__PURE__ */ _template("__tests__/components/custom-tag.marko", $template, $walks, $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, custom_tag_default, null, (out, count, count2) => {
		out.be("div", null, "1", _component, null, 0);
		out.t("Counts: ", _component);
		out.t(count, _component);
		out.t(",", _component);
		out.t(count2, _component);
		out.ee();
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
