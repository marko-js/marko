// tags/components/hello-internal.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "c", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<h1>Hello world</h1>");
}, { t: _marko_componentType }, {});

// tags/hello.marko
var hello_default = _template("b", (input) => {
	_scope_reason();
	_dynamic_tag(_scope_id(), "a", _marko_template, {}, 0, 0, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	hello_default({});
}, 1);
