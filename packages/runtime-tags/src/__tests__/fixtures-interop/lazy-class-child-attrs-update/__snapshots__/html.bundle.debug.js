// child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/child.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = { onMount() {
	console.log("loaded");
} };
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span id=child>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</span>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// template.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("__tests__/child.marko", _marko_template$1);
const _marko_component = {
	onCreate() {
		this.state = { value: 0 };
	},
	increment() {
		this.state.value++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=inc>");
	out.w("Inc");
	out.w("</button>");
	(0, import_render_tag.default)(_marko_load_Child, { "value": state.value }, out, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
