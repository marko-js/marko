// template.marko
var import_components = require_components();
var import_vdom = require_vdom();
var import_load_tag_browser = /* @__PURE__ */ __toESM(require_load_tag_browser());
var import_load_tag_visible_trigger = /* @__PURE__ */ __toESM(require_load_tag_visible_trigger());
var import_load_tag_idle_trigger = /* @__PURE__ */ __toESM(require_load_tag_idle_trigger());
var import_load_tag_race_trigger = /* @__PURE__ */ __toESM(require_load_tag_race_trigger());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag_browser.default)("b", () => import("./child.mjs"), (0, import_load_tag_race_trigger.default)((0, import_load_tag_visible_trigger.default)("body"), (0, import_load_tag_idle_trigger.default)({ timeout: 100 })));
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { value: 0 };
	},
	increment() {
		this.state.value++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "inc" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t("Inc", _component);
	out.ee();
	(0, import_render_tag.default)(_marko_load_Child, { "value": state.value }, out, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/child.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "id": "child" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
