// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $rendernotafunction_content = _content("__tests__/template.marko_1*content", "<span>body</span>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $rendernotafunction_content);
function $setup($scope) {
	$dynamicTag($scope, _marko_template);
	$dynamicTag2($scope, { render: "not a function" });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => {};

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-thing.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-thing.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", null, "0", _component, null, 0);
	out.t("class", _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
