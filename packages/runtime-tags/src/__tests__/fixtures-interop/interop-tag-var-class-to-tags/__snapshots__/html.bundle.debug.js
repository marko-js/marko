// components/tags-return.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_return_default = _template("__tests__/components/tags-return.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x;
	return $return;
});

// components/tags-child.marko
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = tags_return_default({ x: input.x });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/components/tags-child.marko_0_v#6/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", v, $sg__input_x)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/components/tags-child.marko", 0);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "x": state.count }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
