// components/split-display/index.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div id=class-api>${(0, import_escape_xml.x)(input.value)}</div>`);
}, {
	t: _marko_componentType,
	s: true
}, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>inc</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", _marko_template, { value: count });
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
