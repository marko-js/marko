// components/class-display.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-display.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=display>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-display.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let msg = "hi";
	_html(`<button id=tags>Tags</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", _marko_template, { value: msg });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { msg }, "__tests__/template.marko", 0, { msg: "1:6" });
	_resume_branch($scope0_id);
}, 1);
