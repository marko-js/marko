// tags/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("__tests__/tags/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button id=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tags-child.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/tags-child.marko", 0, { count: "1:6" });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "value": 1 }), null, null, null, _componentDef, "0");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "1");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
