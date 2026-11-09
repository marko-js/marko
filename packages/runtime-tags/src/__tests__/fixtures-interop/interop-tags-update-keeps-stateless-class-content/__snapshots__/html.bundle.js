// components/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let m = 0;
	_html(`<button id=tags>${_text_mark($scope0_id, "b", m)}</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.content, { m });
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.content,
		g: m
	});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, null, (out) => {
		out.w("<b id=body>class body</b>");
	}, null, null, _componentDef, "0");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	i: true
}, {});
