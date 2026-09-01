// components/class-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-child.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = { handleClick() {
	this.emit("change");
} };
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-child>");
	out.w("Change");
	out.w("</button>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/tags-child.marko
s("__tests__/components/class-child.marko", _marko_template$1);
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template$1, { "on-change": _resume(function() {
		input.onChange?.();
	}, "__tests__/components/tags-child.marko_0/onchange", $scope0_id) }, 0, 0, _serialize_guard($scope0_reason, 0));
	_scope($scope0_id, { input_onChange: input.onChange }, "__tests__/components/tags-child.marko", 0, { input_onChange: ["input.onChange"] });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_class_fn = (_component) => function() {
	_component.handleChange();
};
const _marko_component = {
	onCreate() {
		this.state = { changed: 0 };
	},
	handleChange() {
		this.state.changed++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class-parent>");
	out.w((0, import_escape_xml.x)(state.changed));
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "onChange": (0, import_runtime_html.f)("__tests__/template.marko/h0", _marko_class_fn(_component), _component, out) }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
