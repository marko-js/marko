// components/class-thing.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "c", _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button class=thing>thing ${(0, import_escape_xml.x)(state.clicks)}</button>`);
}, { t: _marko_componentType$2 }, {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
});

// components/class-child.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_attr = /* @__PURE__ */ __toESM(require_attr());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<p${(0, import_attr.default)("id", input.id)}>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</p>");
}, { t: _marko_componentType$1 }, {});

// components/tags-to-class.marko
s("b", _marko_template$1);
var tags_to_class_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template$1, input, 0, 0, $sg__input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.n)}</button>`);
	(0, import_dynamic_tag.default)(out, tags_to_class_default, () => ({ "id": "roundtrip" }), (out) => {
		out.w(`Hello ${(0, import_escape_xml.x)(state.n)}`);
		(0, import_render_tag.default)(_marko_template$2, {}, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
});
