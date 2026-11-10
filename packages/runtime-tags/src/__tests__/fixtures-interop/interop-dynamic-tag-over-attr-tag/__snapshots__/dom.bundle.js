// components/tags-inner.marko
var import_vdom = require_vdom();
const $template$1 = "<!><!><!>";
const $inputitem_content = _content("b0", "<i>body</i>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputitem_content);
const $input_item = $dynamicTag;

// components/tags-outer.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $item_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "c0");
const $item_content = /*@__PURE__*/ _content("c1", "<b id=item> </b>", "D ", $item_content__input_label);
function $setup($scope) {
	$input_item($scope.a, attrTag({ content: $item_content($scope) }));
	$input_item($scope.b, attrTag({}));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($item_content__input_label);
const $input_label = /*@__PURE__*/ _const(4, $input_label__closure);
var tags_outer_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);

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
		this.state = { label: "a" };
	},
	toggle() {
		this.state.label = this.state.label === "a" ? "b" : "a";
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "toggle", false) });
	out.t("toggle", _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_outer_default, () => ({ "label": state.label }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
