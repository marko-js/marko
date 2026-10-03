// components/tags-child.marko
var tags_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_name__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("value", 1), (value) => {
			const $scope2_id = _scope_id();
			_html(_escape(value));
			_script($scope2_id, "b0", 0);
			_subscribe($wi__input_name && $input_name__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", 0);
			_resume_branch($scope2_id);
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "a", err.message, $wg__err_message));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, void 0, "b2");
	_script($scope0_id, "b3", 0);
	_scope($scope0_id, {
		d: input.name,
		e: $wi__input_name && $input_name__closures
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
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "a" }), null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "name": "b" }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	i: true
}, {});
