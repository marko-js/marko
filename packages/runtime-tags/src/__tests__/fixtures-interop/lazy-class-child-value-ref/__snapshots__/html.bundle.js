// components/child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span id=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, {
	t: _marko_componentType$1,
	i: true
}, {});

// template.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("b", _marko_template$1);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "0");
	(0, import_render_tag.default)(_marko_template$1, { "value": 2 }, out, _componentDef, "1");
	out.w(`<div id=t>${(0, import_escape_xml.x)(typeof _marko_template$1)}</div>`);
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	i: true
}, {});
