// tags/label-view.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<p>${_patch_text($scope0_id, "a", get(), void 0, $scope0_reason, 3)}</p>`);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "b3");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb0", input.flag, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 11 | _mask_group($scope0_reason, 0) << 13);
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_patch_child_end();
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 0) && input.title,
		a: _existing_scope($childScope)
	});
}, 1);
