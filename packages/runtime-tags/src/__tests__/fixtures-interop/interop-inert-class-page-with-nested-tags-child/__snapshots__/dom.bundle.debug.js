// components/class-section.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-section.marko", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("section", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, tags_label_default, () => ({ "text": "count" }), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "2");
	out.ee();
}, {
	t: _marko_componentType$1,
	i: true,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
	out.ee();
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

// tags/tags-label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input = ($scope, input) => $input_text($scope, input.text);
var tags_label_default = /*@__PURE__*/ _template("__tests__/tags/tags-label.marko", $template$1, "D l", 0, $input);

// tags/tags-counter.marko
const $template = "<button id=counter> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/tags-counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var tags_counter_default = /*@__PURE__*/ _template("__tests__/tags/tags-counter.marko", $template, $walks, $setup);
