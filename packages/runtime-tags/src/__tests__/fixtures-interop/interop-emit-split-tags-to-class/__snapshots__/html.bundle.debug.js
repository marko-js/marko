// components/split-button/index.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_data_marko = /* @__PURE__ */ __toESM(require_data_marko());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/split-button/index.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button${(0, import_data_marko.default)(out, _componentDef, { "onclick": _componentDef.d("click", "handleClick", false) })} id=class-api>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</button>");
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/split-button/index.marko", _marko_template, "preserve");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let msg = "hello";
	_dynamic_tag($scope0_id, "#text/0", _marko_template, { onClick: _resume(function() {
		msg = "";
	}, "__tests__/template.marko_0/onClick", $scope0_id) }, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Reset");
	}, $scope0_id), 0, 0);
	_html(`<div id=tags-api>${_escape(msg)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
