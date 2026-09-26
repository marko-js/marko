// components/tags-return.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_return_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.x;
});

// components/tags-child.marko
var tags_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = tags_return_default({ x: input.x });
	_var($scope0_id, "b", $childScope, "b0");
	_html(`<p>${_text_resume($scope0_id, "c", v, $sg__input_x)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "x": state.count }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});
