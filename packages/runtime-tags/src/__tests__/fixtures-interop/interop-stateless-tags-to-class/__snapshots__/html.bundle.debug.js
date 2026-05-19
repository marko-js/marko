// components/my-button/index.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_data_marko = /* @__PURE__ */ __toESM(require_data_marko());
var import_attrs = /* @__PURE__ */ __toESM(require_attrs());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/my-button/index.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button${(0, import_data_marko.default)(out, _componentDef, { "onclick": _componentDef.d("click", "handleClick", false) })}${(0, import_attrs.default)(input)}>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</button>");
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, { onClick: _resume(function() {
		document.getElementById("display").innerHTML = "Hi!";
	}, "__tests__/template.marko_0/onClick") }, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Say Hi");
	}, $scope0_id), 0, 0);
	_html("<span id=display></span>");
}, 1);
