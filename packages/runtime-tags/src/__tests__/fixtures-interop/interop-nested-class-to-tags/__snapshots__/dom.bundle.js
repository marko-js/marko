// total: 65756 (min) 20214 (brotli)
// components/tags-layout.marko: 115 (min) 98 (brotli)
var import_vdom = require_vdom();
const $template = "<button id=tags> </button><div><!></div>";
const $walks = " D lD%l";
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2);
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var tags_layout_default = /* @__PURE__ */ _template("b", $template, $walks, $setup, $input);

// template.marko: 499 (min) 275 (brotli)
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
	(0, import_dynamic_tag.default)(out, tags_layout_default, null, (out) => {
		out.be("button", { "id": "class" }, "1", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
		out.t(state.count, _component);
		out.ee();
	}, null, null, _componentDef, "0");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
