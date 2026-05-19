// tags/hello-tags.marko
var import_html = require_html();
var hello_tags_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>Hello tags</h1>");
});

// components/hello-components.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<h1>Hello components</h1>");
}, {
	t: _marko_componentType$1,
	i: true
}, {});

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, hello_tags_default, null, null, null, null, _componentDef, "0");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
}, {
	t: _marko_componentType,
	i: true
}, {});
