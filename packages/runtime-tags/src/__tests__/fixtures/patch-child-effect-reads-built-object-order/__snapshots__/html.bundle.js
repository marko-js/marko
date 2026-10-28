// tags/child.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, _filled_guard($scope0_reason, 0), "c");
	_scope($scope0_id, { c: input.value }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D /${_w0}&l`)("")};${((_w0) => `<p> </p>${_w0}`)("")}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_y = _server_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_resume($scope0_id, "a", input.x, void 0, $scope0_reason, 1)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	child_default({ value: _patch_live($childScope, c, $scope0_id, "f e") });
	_patch_child_end();
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && a,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && b,
		b: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "va0", a, !$sg__input_y) : _patch_write($scope0_id, "xg", a, !$sg__input_y)), _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va1", b, !$sg__input_x) : _patch_write($scope0_id, "xh", b, !$sg__input_x)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !$sg__input_x), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.y, !$sg__input_y));
}, 1);
