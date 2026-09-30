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
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": 1 }), null, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// tags/tags-child.marko
const $template = "<button id=inc> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $input_value = $count;
const $setup__script = _script("__tests__/tags/tags-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var tags_child_default = /*@__PURE__*/ _template("__tests__/tags/tags-child.marko", $template, $walks, $setup, $input);
