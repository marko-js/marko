// components/class-script.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-script.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.script("window.__classInteropScript = true");
	out.w("<div id=class-api>");
	out.w("class content");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<div id=tags-api>${_escape(n)}</div>`);
	_dynamic_tag($scope0_id, "#text/1", _marko_template, {}, void 0, void 0, 0, 1);
	_resume_branch($scope0_id);
}, 1);
