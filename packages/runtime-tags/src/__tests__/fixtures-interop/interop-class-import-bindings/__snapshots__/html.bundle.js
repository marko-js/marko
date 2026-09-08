// components/class-card.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "b", _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<p>Card: ${(0, import_escape_xml.x)(input.label)}</p>`);
}, { t: _marko_componentType$2 }, {});

// components/class-default.marko
const _marko_componentType$1 = "c", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<p>Default: ${(0, import_escape_xml.x)(input.label)}</p>`);
}, { t: _marko_componentType$1 }, {});

// components/tags-counter.marko
var tags_counter_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr("id", input.id)}${_attr("data-parent", input.count)}>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, { g: count });
});

// namespace.js
var namespace_exports = /* @__PURE__ */ __exportAll({ render: () => render });
function render(input, out) {
	out.text(`Namespace: ${input.label}`);
}

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "named" }), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "mixed" }), null, null, null, _componentDef, "2");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "alias" }), null, null, null, _componentDef, "3");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "lowercase" }), null, null, null, _componentDef, "4");
	(0, import_dynamic_tag.default)(out, namespace_exports, () => ({ "label": "namespace" }), null, null, null, _componentDef, "5");
	(0, import_dynamic_tag.default)(out, _marko_template$1, () => ({ "label": "default alias" }), null, null, null, _componentDef, "6");
	(0, import_render_tag.default)(_marko_template$1, { "label": "default" }, out, _componentDef, "7");
	(0, import_dynamic_tag.default)(out, tags_counter_default, () => ({
		"id": "direct",
		"count": state.count
	}), null, null, null, _componentDef, "8");
	(0, import_dynamic_tag.default)(out, tags_counter_default, () => ({
		"id": "named-tags",
		"count": state.count
	}), null, null, null, _componentDef, "9");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "10");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});
