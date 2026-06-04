// child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "a", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span id=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, {
	t: _marko_componentType$1,
	i: true
}, {});

// template.marko
var import_with_entry = require_with_entry();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_with_assets_Child = (0, import_with_entry.withAssets)(_marko_template$1, "a");
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=toggle>toggle</button>");
	if (state.show) (0, import_render_tag.default)(_marko_with_assets_Child, { "value": 42 }, out, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { show: true };
	},
	toggle() {
		this.state.show = !this.state.show;
	}
});
