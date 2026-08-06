// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/tags-child.marko_0");
	writeScope($scope0_id, {
		input_data: input.data,
		count
	}, "__tests__/components/tags-child.marko", 0, {
		input_data: ["input.data"],
		count: "2:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = { onCreate() {
	this.state = { n: 0 };
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	out.w((0, import_escape_xml.x)(state.n));
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "data": { nested: { fn() {} } } }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
