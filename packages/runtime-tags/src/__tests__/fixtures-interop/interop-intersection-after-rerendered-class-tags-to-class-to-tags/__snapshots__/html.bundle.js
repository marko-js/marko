// tags/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const doubled = n * 2;
	_html(`<button>${_text_resume($scope0_id, "b", input.value + ":0")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.value,
		f: n,
		g: _serialize_if($scope0_reason, 0) && doubled
	});
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": input.value }), null, null, null, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType }, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let y = 1;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", _marko_template, { value: y });
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: y });
}, 1);
