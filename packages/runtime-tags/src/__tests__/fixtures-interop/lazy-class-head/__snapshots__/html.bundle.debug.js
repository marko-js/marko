// child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/child.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span id=child>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</span>");
}, {
	t: _marko_componentType$1,
	i: true,
	d: true
}, _marko_component$1);

// template.marko
var import_with_entry = require_with_entry();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_reorderer_renderer = /* @__PURE__ */ __toESM(require_reorderer_renderer());
var import_preferred_script_location_tag = /* @__PURE__ */ __toESM(require_preferred_script_location_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_with_assets_Child = (0, import_with_entry.withAssets)(_marko_template$1, "__tests__/child.marko");
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<!DOCTYPE html>");
	out.w("<html>");
	out.w("<head>");
	out.w("<title>");
	out.w("Head Flush Test");
	out.w("</title>");
	(0, import_with_entry.flushHead)(out);
	out.w("</head>");
	out.w("<body>");
	(0, import_render_tag.default)(_marko_with_assets_Child, { "value": input.value }, out, _componentDef, "4");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "5");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "6");
	(0, import_render_tag.default)(import_reorderer_renderer.default, {}, out, _componentDef, "7");
	(0, import_render_tag.default)(import_preferred_script_location_tag.default, {}, out, _componentDef, "8");
	out.w("</body>");
	out.w("</html>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
