// components/child.marko
var import_escape_xml = require_escape_xml();
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType$2 = "b";
const _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
_marko_template$2._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span class=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, { t: _marko_componentType$2 }, { onMount() {
	console.log("mounted", this.input.value);
} });

// components/parent/index.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType$1 = "c";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("b", _marko_template$2, flush$1);
_marko_template$1._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(_marko_load_Child, { "value": input.value }, out, _componentDef, "0");
}, {
	t: _marko_componentType$1,
	s: true
}, {});

// template.marko
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
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
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	i: true
}, {});
