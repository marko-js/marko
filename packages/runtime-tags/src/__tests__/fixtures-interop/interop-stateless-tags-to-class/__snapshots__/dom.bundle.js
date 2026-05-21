// total: 66503 (min) 20514 (brotli)
// components/my-button/component-browser.js: 91 (min) 60 (brotli)
var import_registry = require_registry();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_attrs = /* @__PURE__ */ __toESM(require_attrs());
var import_vdom = require_vdom();
var component_browser_default = class {
	handleClick(e) {
		if (!this.input.disabled) this.emit("click", e);
	}
};

// components/my-button/index.marko: 455 (min) 233 (brotli)
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => component_browser_default);
const _marko_component = {};
component_browser_default.renderer = _marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", (0, import_attrs.default)(input), "0", _component, null, 4, { "onclick": _componentDef.d("click", "handleClick", false) });
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	s: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko: 137 (min) 86 (brotli)
_resume_dynamic_tag();
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a1", "Say Hi", "b"));
function $onClick() {
	document.getElementById("display").innerHTML = "Hi!";
}
_resume("a0", $onClick);

// v:template.marko.hydrate-6.js: 0 (min) 1 (brotli)
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js: 65 (min) 50 (brotli)
var import_components = require_components();
(0, import_components.register)("b", component_browser_default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
