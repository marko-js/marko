// components/tags-define.marko
var import_html = require_html();
var tags_define_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<b id=a>a</b>");
	}, $scope0_id) };
	const B = { content: _content_resume("b1", () => {
		_scope_id();
		_scope_reason();
		_html("<i id=b>b</i>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.which ? A : B, {}, 0, 0, $wg__input_which);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: A,
		f: B
	});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>toggle</button>");
	(0, import_dynamic_tag.default)(out, tags_define_default, () => ({ "which": state.which }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { which: true };
	},
	toggle() {
		this.state.which = !this.state.which;
	}
});
