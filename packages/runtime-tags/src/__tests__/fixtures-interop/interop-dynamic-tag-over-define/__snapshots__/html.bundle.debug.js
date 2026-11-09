// components/tags-define.marko
var import_html = require_html();
var tags_define_default = _template("__tests__/components/tags-define.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/components/tags-define.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<b id=a>a</b>");
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/components/tags-define.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<i id=b>b</i>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.which ? A : B, {}, 0, 0, $wg__input_which);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		A,
		B
	}, "__tests__/components/tags-define.marko", 0, {
		A: "1:9",
		B: "4:9"
	});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { which: true };
	},
	toggle() {
		this.state.which = !this.state.which;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w("toggle");
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_define_default, () => ({ "which": state.which }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
