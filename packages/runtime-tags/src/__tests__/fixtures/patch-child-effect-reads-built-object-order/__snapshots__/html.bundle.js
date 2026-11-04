// tags/child.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, $fg__input_value, "c");
	_scope($scope0_id, { c: input.value }) || $fg__input_value && _patch_write($scope0_id, "xc", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D /${_w0}&l`)("")};${((_w0) => `<p> </p>${_w0}`)("")}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_y = _unfilled_if($scope0_reason, 0), $sg__input_y = _server_guard($scope0_reason, 2), $fg__input_y = _filled_guard($scope0_reason, 2), $sg__input_x = _server_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_mark($scope0_id, "a", input.x, 1, $scope0_reason, 1)}</p>`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({ value: _patch_live($childScope, c, $scope0_id, "f e") });
	_patch_child_end();
	_patch_render($scope0_id, "a0", [$fg__input_y && "f", $fg__input_x && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || $ui__input_x__OR__input_y) && a,
		h: (_unfilled_if($scope0_reason, 2) || $ui__input_x__OR__input_y) && b,
		b: _existing_scope($childScope)
	}) || ($fg__input_x && _patch_write($scope0_id, "xe", input.x, !$sg__input_x), $fg__input_y && _patch_write($scope0_id, "xf", input.y, !$sg__input_y), $fg__input_y && _patch_write($scope0_id, "xg", a, !$sg__input_y), $fg__input_x && _patch_write($scope0_id, "xh", b, !$sg__input_x));
}, 1);
