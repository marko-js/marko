// template.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<h1>");
	out.w("Hello world");
	out.w("</h1>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
