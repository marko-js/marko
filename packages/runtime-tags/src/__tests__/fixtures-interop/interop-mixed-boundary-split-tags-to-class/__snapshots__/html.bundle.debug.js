// components/split-counter/index.marko
var import_html = require_html();
var import_data_marko = /* @__PURE__ */ __toESM(require_data_marko());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/split-counter/index.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button${(0, import_data_marko.default)(out, _componentDef, { "onclick": _componentDef.d("click", "handleClick", false) })} id=class-api data-count=0>`);
	out.w("click");
	out.w("</button>");
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/split-counter/index.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html_opens("__tests__/template.marko:3:1"), _html(`<button id=bump>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", _marko_template, {}, 0, 0, 0, "__tests__/template.marko:4:1");
	_dynamic_tag($scope0_id, "#text/3", _marko_template, { count: n }, void 0, void 0, void 0, "__tests__/template.marko:5:1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "2:6" });
	_resume_branch($scope0_id);
}, 1);
