// components/tags-inner.marko
var import_vdom = require_vdom();
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $inputitem_content = _content("__tests__/components/tags-inner.marko_1*content", "<i>body</i>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputitem_content);
const $input_item = $dynamicTag;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var tags_inner_default = /*@__PURE__*/ _template("__tests__/components/tags-inner.marko", $template$1, "b%c", 0, $input$1);

// components/tags-outer.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $item_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/components/tags-outer.marko_1_input_label#0:4/subscribe");
const $item_content__setup = $item_content__input_label;
const $item_content = /*@__PURE__*/ _content("__tests__/components/tags-outer.marko_1*content", "<b id=item> </b>", "D ", $item_content__setup);
function $setup($scope) {
	$input_item($scope["#childScope/0"], attrTag({ content: $item_content($scope) }));
	$input_item($scope["#childScope/1"], attrTag({}));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($item_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var tags_outer_default = /*@__PURE__*/ _template("__tests__/components/tags-outer.marko", $template, $walks, $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
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
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
