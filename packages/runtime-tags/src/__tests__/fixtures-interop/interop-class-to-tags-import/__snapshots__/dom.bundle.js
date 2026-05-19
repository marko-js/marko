// total: 65544 (min) 20167 (brotli)
// components/tags-counter.marko: 115 (min) 99 (brotli)
var import_vdom = require_vdom();
const $template = "<button id=tags> </button>";
const $walks = " D l";
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $input_count = ($scope, input_count) => _attr($scope.a, "data-parent", input_count);
const $input = ($scope, input) => $input_count($scope, input.count);
var tags_counter_default = /* @__PURE__ */ _template("b", $template, $walks, $setup, $input);

// template.marko: 517 (min) 281 (brotli)
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_counter_default, () => ({ "count": state.count }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
