// components/tags-layout.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_layout_default, null, (out) => {
		out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
	}, null, null, _componentDef, "0");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});
