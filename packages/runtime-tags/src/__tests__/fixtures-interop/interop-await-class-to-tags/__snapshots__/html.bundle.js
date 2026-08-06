// components/tags-child.marko
var tags_child_default = _template("b", (input) => {
	_scope_reason();
	_await(_scope_id(), "a", resolveAfter("hi", 1), (value) => {
		_scope_id();
		_html(`<div id=tags>${_escape(value)}</div>`);
	}, 0);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div id=class>${(0, import_escape_xml.x)(state.n)}</div>`);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, { onCreate() {
	this.state = { n: 0 };
} });
