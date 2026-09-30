// components/parent/index.marko
var import_vdom = require_vdom();
var import_load_tag_browser = /* @__PURE__ */ __toESM(require_load_tag_browser());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/parent/index.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
const _marko_load_Child = (0, import_load_tag_browser.default)("__tests__/components/child.marko", () => import("./child.mjs").then((n) => n.t));
(0, import_registry.r)(_marko_componentType$1, () => component_browser_default);
const _marko_component$1 = {};
component_browser_default.renderer = _marko_template$1._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(_marko_load_Child, { "value": input.value }, out, _componentDef, "0");
}, {
	t: _marko_componentType$1,
	s: true,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// template.marko
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("placeholder", { "renderBody": (out) => {
			(0, import_render_tag.default)(_marko_template$1, { "value": "placeholder" }, out, _componentDef, "1");
		} });
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			(0, import_render_tag.default)(_marko_template$1, { "value": value }, out, _componentDef, "2");
		} });
	}, {
		"clientReorder": true,
		"_provider": resolveAfter("resolved", 1),
		"_name": "resolveAfter(\"resolved\", 1)"
	}), out, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/child.marko
var child_exports = /* @__PURE__ */ __exportAll({ default: () => _marko_template });
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/child.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = { onMount() {
	console.log("mounted", this.input.value);
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "class": "child" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/parent/component-browser.js
var component_browser_default = {};
