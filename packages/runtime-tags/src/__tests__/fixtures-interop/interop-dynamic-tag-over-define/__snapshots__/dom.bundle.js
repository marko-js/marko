// components/tags-define.marko
var import_vdom = require_vdom();
const $template = "<!><!><!>";
const $walks = "b%c";
const $B_content = _content("b1", "<i id=b>b</i>");
const $A_content = _content("b0", "<b id=a>a</b>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_which__OR__A__OR__B = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.d ? $scope.e : $scope.f), 2);
const $A = /*@__PURE__*/ _const(4, $input_which__OR__A__OR__B);
const $B = /*@__PURE__*/ _const(5, $input_which__OR__A__OR__B);
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_which = /*@__PURE__*/ _const(3, $input_which__OR__A__OR__B);
const $input = ($scope, input) => $input_which($scope, input.which);
var tags_define_default = /*@__PURE__*/ _template("b", $template, "b%c", $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { which: true };
	},
	toggle() {
		this.state.which = !this.state.which;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "toggle", false) });
	out.t("toggle", _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_define_default, () => ({ "which": state.which }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
