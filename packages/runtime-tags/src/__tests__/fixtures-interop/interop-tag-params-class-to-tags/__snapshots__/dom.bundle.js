// total: 66019 (min) 20311 (brotli)
// components/tags-layout.marko: 183 (min) 146 (brotli)
var import_vdom = require_vdom();
const $template = "<button id=tags> </button><div><!></div>";
const $walks = " D lD%l";
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, 0, 0, 1);
const $input_content__OR__count = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.f, () => [$scope.g, "hello"]));
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_content__OR__count($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $input_content = /* @__PURE__ */ _const(5, $input_content__OR__count);
const $input = ($scope, input) => $input_content($scope, input.content);
var tags_layout_default = /* @__PURE__ */ _template("b", $template, $walks, $setup, $input);

// template.marko: 622 (min) 311 (brotli)
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { multiplier: 1 };
	},
	increment() {
		this.state.multiplier++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_layout_default, null, (out, baseCount, message) => {
		out.be("h1", null, "1", _component, null, 0);
		out.t(message, _component);
		out.ee();
		out.be("button", { "id": "class" }, "2", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
		out.t(state.multiplier, _component);
		out.t(" * ", _component);
		out.t(baseCount, _component);
		out.t(" = ", _component);
		out.t(baseCount * state.multiplier, _component);
		out.ee();
	}, null, null, _componentDef, "0");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
