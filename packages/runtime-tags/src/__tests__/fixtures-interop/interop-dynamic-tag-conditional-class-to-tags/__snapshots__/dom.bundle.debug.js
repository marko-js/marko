// components/tags-child.marko
var import_vdom = require_vdom();
const $template = "<button id=tags> </button>";
const $walks = " D l";
const $count__script = _script("__tests__/components/tags-child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, $walks, $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { show: true };
	},
	toggle() {
		this.state.show = !this.state.show;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "toggle", false) });
	out.t("toggle", _component);
	out.ee();
	const _tagName = state.show && tags_child_default;
	(0, import_dynamic_tag.default)(out, _tagName, null, null, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
