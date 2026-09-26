// tags/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("__tests__/tags/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const doubled = n * 2;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.value + ":" + doubled)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tags-child.marko_0");
	_scope($scope0_id, {
		input_value: input.value,
		n,
		doubled: _serialize_if($scope0_reason, 0) && doubled
	}, "__tests__/tags/tags-child.marko", 0, {
		input_value: ["input.value"],
		n: "1:6",
		doubled: "2:8"
	});
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-wrap.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": input.value }), null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-wrap.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let y = 1;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", _marko_template, { value: y });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { y }, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
