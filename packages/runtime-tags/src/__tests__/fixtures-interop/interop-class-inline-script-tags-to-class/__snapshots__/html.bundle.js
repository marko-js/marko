// components/class-script.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.script("window.__classInteropScript = true");
	out.w("<div id=class-api>class content</div>");
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=tags-api>${_escape(0)}</div>`);
	_dynamic_tag($scope0_id, "b", _marko_template, {}, 0, 0, 0);
	_resume_branch($scope0_id);
}, 1);
