// components/tags-layout.marko
var import_vdom = require_vdom();
const $template = "<button id=tags> </button><div><!></div>";
const $walks = " D lD%l";
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2", 0, 0, 1);
const $input_content__OR__count = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.count, "hello"]));
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_content__OR__count($scope);
});
const $setup__script = _script("__tests__/components/tags-layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_content = /* @__PURE__ */ _const("input_content", $input_content__OR__count);
const $input = ($scope, input) => $input_content($scope, input.content);
var tags_layout_default = /* @__PURE__ */ _template("__tests__/components/tags-layout.marko", $template, $walks, $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
