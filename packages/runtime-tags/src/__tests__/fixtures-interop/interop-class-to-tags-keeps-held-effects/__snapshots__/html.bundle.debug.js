// components/tags-child.marko
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_name__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("value", 1), (value) => {
			const $scope2_id = _scope_id();
			_html(_escape(value));
			_script($scope2_id, "__tests__/components/tags-child.marko_2_input_name#0:3", 0);
			_subscribe($wi__input_name && $input_name__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/components/tags-child.marko", "6:4"), "__tests__/components/tags-child.marko_2_input_name#0:3/subscribe", 0);
			_resume_branch($scope2_id);
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/components/tags-child.marko", "5:2");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/components/tags-child.marko", "10:4");
	}, void 0, "__tests__/components/tags-child.marko_3*content");
	_script($scope0_id, "__tests__/components/tags-child.marko_0_input_name#3", 0);
	_scope($scope0_id, {
		input_name: input.name,
		"ClosureScopes:input_name/4": $wi__input_name && $input_name__closures
	}, "__tests__/components/tags-child.marko", 0, { input_name: ["input.name"] });
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
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "a" }), null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "b" }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
