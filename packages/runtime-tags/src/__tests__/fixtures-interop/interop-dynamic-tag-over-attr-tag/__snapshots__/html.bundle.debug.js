// components/tags-inner.marko
var import_html = require_html();
var tags_inner_default = _template("__tests__/components/tags-inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.item, {}, _content_resume("__tests__/components/tags-inner.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<i>body</i>");
	}, $scope0_id), 0, $wg__input_item);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/components/tags-inner.marko", 0);
});

// components/tags-outer.marko
var tags_outer_default = _template("__tests__/components/tags-outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	tags_inner_default({ item: attrTag({ content: _content("__tests__/components/tags-outer.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b id=item>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</b>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/components/tags-outer.marko", "3:4"), "__tests__/components/tags-outer.marko_1_input_label#0:4/subscribe", $wg__input_label);
	}, $scope0_id) }) });
	tags_inner_default({ item: attrTag({}) });
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/5": $input_label__closures }, "__tests__/components/tags-outer.marko", 0);
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
		this.state = { label: "a" };
	},
	toggle() {
		this.state.label = this.state.label === "a" ? "b" : "a";
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w("toggle");
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_outer_default, () => ({ "label": state.label }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
