// tags/tags-counter.marko
var import_html = require_html();
var tags_counter_default = _template("__tests__/tags/tags-counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=counter>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tags-counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/tags-counter.marko", 0, { n: "1:6" });
});

// components/class-wrapper.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-wrapper.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-wrapper.marko", _marko_template, "preserve");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, 0, 0, 0);
}, 1);
