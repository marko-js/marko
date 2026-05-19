// tags/components/hello-internal.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/tags/components/hello-internal.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<h1>");
	out.w("Hello world");
	out.w("</h1>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// tags/hello.marko
var hello_default = _template("__tests__/tags/hello.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, 0, 0, 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	hello_default({});
}, 1);
