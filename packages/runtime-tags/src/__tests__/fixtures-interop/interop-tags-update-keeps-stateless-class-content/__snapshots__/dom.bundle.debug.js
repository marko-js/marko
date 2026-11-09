// template.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, null, (out) => {
		out.be("b", { "id": "body" }, "1", _component, null, 1);
		out.t("class body", _component);
		out.ee();
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/tags-child.marko
const $template = "<button id=tags> </button><!><!>";
const $walks = " D l%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content__OR__m = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({ m: $scope.m })));
const $m = /*@__PURE__*/ _let("m/6", ($scope) => {
	_text($scope["#text/1"], $scope.m);
	$input_content__OR__m($scope);
});
const $setup__script = _script("__tests__/components/tags-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$m($scope, +$scope.m + 1);
}));
function $setup($scope) {
	$m($scope, 0);
	$setup__script($scope);
}
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__m);
const $input = ($scope, input) => $input_content($scope, input.content);
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, $walks, $setup, $input);
