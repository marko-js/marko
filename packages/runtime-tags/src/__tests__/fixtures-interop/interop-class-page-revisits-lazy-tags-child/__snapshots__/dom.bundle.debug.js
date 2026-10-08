// tags/lazy-wrap.marko
var import_vdom = require_vdom();
const $template = "<div class=lazy><!></div>";
const $walks = "D%/&l";
let $load_Counter_setup = /*@__PURE__*/ _load_setup(() => import("./v:counter.marko.setup.mjs"));
let $load_Counter_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:counter.marko.input_value.mjs"));
function $setup($scope) {
	$load_Counter_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Counter_tag_input_value($scope["#childScope/1"], 0);
}
var lazy_wrap_default = /*@__PURE__*/ _template("__tests__/tags/lazy-wrap.marko", $template, $walks, $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, lazy_wrap_default, null, null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, counter_default, () => ({ "value": 10 }), null, null, null, _componentDef, "2");
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

// tags/v:counter.marko.css
var v_counter_marko_default = "\n  .count { color: green }\n";

// tags/counter.marko
var counter_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_value: () => $input_value,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks,
	default: () => counter_default
});
const $template = "<button class=count> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $input_value = $count;
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);

// tags/v:counter.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
