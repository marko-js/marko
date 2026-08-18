// components/class-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-child>Change</button>");
}, { t: _marko_componentType$1 }, { handleClick() {
	this.emit("change");
} });

// components/tags-child.marko
s("b", _marko_template$1);
var tags_child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template$1, { "on-change": _resume(function() {
		input.onChange?.();
	}, "c0", $scope0_id) }, 0, 0, _serialize_guard($scope0_reason, 0));
	writeScope($scope0_id, { d: input.onChange });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_class_fn = (_component) => function() {
	_component.handleChange();
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div id=class-parent>${(0, import_escape_xml.x)(state.changed)}</div>`);
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "onChange": (0, import_runtime_html.f)("a/h0", _marko_class_fn(_component), _component, out) }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { changed: 0 };
	},
	handleChange() {
		this.state.changed++;
	}
});
