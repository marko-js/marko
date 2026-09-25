// tags/tags-layout.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var tags_layout_default = /*@__PURE__*/ _template("__tests__/tags/tags-layout.marko", $template$2, "D%l", 0, $input);

// components/class-section.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-section.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, input.layout, null, (out) => {
		out.be("span", null, "1", _component, null, 0);
		out.t("Class content", _component);
		out.ee();
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// tags/tags-section.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup$1($scope) {
	$dynamicTag($scope, _marko_template, () => ({ layout: tags_layout_default }));
}
var tags_section_default = /*@__PURE__*/ _template("__tests__/tags/tags-section.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)("D%l", "b%c");
const $tagslayout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span>Tags content</span>");
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $tagslayout_content($scope));
	$setup$1($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
