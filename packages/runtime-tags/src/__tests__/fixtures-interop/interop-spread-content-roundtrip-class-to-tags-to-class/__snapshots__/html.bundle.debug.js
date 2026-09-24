// components/class-thing.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "__tests__/components/class-thing.marko", _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
const _marko_component$2 = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button class=thing>");
	out.w("thing ");
	out.w((0, import_escape_xml.x)(state.clicks));
	out.w("</button>");
}, {
	t: _marko_componentType$2,
	d: true
}, _marko_component$2);

// components/class-child.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_attr = /* @__PURE__ */ __toESM(require_attr());
const _marko_componentType$1 = "__tests__/components/class-child.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<p${(0, import_attr.default)("id", input.id)}>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</p>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/tags-to-class.marko
s("__tests__/components/class-child.marko", _marko_template$1);
var tags_to_class_default = _template("__tests__/components/tags-to-class.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template$1, input, 0, 0, $sg__input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/components/tags-to-class.marko", 0);
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.n));
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_to_class_default, () => ({ "id": "roundtrip" }), (out) => {
		out.w("Hello ");
		out.w((0, import_escape_xml.x)(state.n));
		(0, import_render_tag.default)(_marko_template$2, {}, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
