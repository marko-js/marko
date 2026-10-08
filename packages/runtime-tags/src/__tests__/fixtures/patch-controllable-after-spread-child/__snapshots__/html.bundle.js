// tags/text-field.marko
const $template = "<input>";
_shells({ b: "b !b0 b1; ;<input>" });
var text_field_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_attr_input_value($scope0_id, "a", value, valueChange)}${_patch_bind($scope0_id, "Ea", valueChange, $scope0_reason, 0)}${_patch_control($scope0_id, "a", 2, value, $scope0_reason, 0)}${_patch_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_reason, 3)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "d", value, 1);
	_patch_write($scope0_id, "e", valueChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && value,
		e: _source_if($scope0_reason, 0) && valueChange
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b2", value), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b3", valueChange));
});

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
