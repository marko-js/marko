// tags/text-field.marko
const $template = "<input>";
_shells({ b: "b !b0 b1; ;<input>" });
var text_field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_patch_input_value($scope0_id, "a", value, valueChange, "n2a", $scope0_reason, 0, "dEa", $scope0_reason, 0)}${_patch_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_reason, 3)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "wd", value, 1);
	_patch_write($scope0_id, "we", valueChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && value,
		e: _unfilled_if($scope0_reason, 0) && valueChange
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb2", value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb3", valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | ($scope0_page ? 0 : 0) << 5 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
