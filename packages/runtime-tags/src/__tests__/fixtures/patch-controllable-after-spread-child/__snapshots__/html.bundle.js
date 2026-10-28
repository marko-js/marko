// tags/text-field.marko
const $template = "<input>";
const $setup$1 = [[], ["b0", "b1"]];
_shells({ b: "b !b0 b1; ;<input>" });
var text_field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_attr_input_value($scope0_id, "a", value, valueChange, "n2a", $scope0_reason, 0, "wEa", $scope0_reason, 0)}${_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_reason, 3)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && value,
		e: _unfilled_if($scope0_reason, 0) && valueChange
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb2", value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
