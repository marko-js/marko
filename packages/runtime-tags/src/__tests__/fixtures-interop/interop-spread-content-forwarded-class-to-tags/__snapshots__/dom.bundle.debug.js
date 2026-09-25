// components/tags-spread.marko
var import_vdom = require_vdom();
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/components/tags-spread.marko_0_input#2", ($scope) => _attrs_script($scope, "#div/0"));
const $input$1 = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input__script($scope);
});
var tags_spread_default = /*@__PURE__*/ _template("__tests__/components/tags-spread.marko", $template$1, " b", 0, $input$1);

// components/tags-forward.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = () => {};
const $input = ($scope, input) => $input$1($scope["#childScope/0"], input);
var tags_forward_default = /*@__PURE__*/ _template("__tests__/components/tags-forward.marko", $template, $walks, 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_forward_default, () => ({ "id": "forwarded" }), (out) => {
		out.t("Hello ", _component);
		out.t(state.n, _component);
	}, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
