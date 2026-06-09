// child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "a", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span id=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, { t: _marko_componentType$1 }, { onMount() {
	console.log("loaded");
} });

// template.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("a", _marko_template$1);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=inc>Inc</button>");
	(0, import_render_tag.default)(_marko_load_Child, { "value": state.value }, out, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { value: 0 };
	},
	increment() {
		this.state.value++;
	}
});
