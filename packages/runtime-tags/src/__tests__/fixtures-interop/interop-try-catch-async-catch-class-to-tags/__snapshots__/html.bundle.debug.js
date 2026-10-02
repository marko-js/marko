// components/tags-child.marko
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", rejectAfter(new Error("x"), 1), (value) => {
			const $scope4_id = _scope_id();
			_html(`<div id=tags>${_escape(value)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter("caught", 2), (v) => {
			const $scope3_id = _scope_id();
			_html("<div id=caught>CAUGHT</div>");
		}, 0);
	}, void 0, "__tests__/components/tags-child.marko_2*content");
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
	out.w("<div id=class>");
	out.w("class");
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
