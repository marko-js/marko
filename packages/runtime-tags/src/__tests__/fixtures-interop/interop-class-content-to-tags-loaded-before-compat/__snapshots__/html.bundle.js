// tags/tags-layout.marko
var tags_layout_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// components/class-section.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, input.layout, null, (out) => {
		out.w("<span>Class content</span>");
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true
}, {});

// tags/tags-section.marko
var tags_section_default = _template("d", (input) => {
	_scope_reason();
	_dynamic_tag(_scope_id(), "a", _marko_template, { layout: tags_layout_default }, 0, 0, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	tags_layout_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("<span>Tags content</span>");
	}, _scope_id()) });
	tags_section_default({});
}, 1);
