// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, $fg__input_item, "c");
	_scope($scope0_id, { c: input.item }) || $fg__input_item && _patch_write($scope0_id, "xc", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b = _unfilled_if($scope0_reason, 2), $ui__input_a = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({
		...input.a,
		...input.b
	});
	_patch_child_end();
	_patch_render($scope0_id, "a0", [$fg__input_a && "d", $fg__input_b && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_b || $ui__input_a__OR__input_b) && input.a,
		e: ($ui__input_a || $ui__input_a__OR__input_b) && input.b,
		a: _existing_scope($childScope)
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $ui__input_a && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)));
}, 1);
