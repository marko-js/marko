// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, $fg__input_label, "c");
	_scope($scope0_id, { c: input.label }) || $fg__input_label && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_n = _unfilled_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const o = {
		label: input.title,
		n: input.n
	};
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	_patch_live($childScope, o.label, $scope0_id, "d e");
	label_default(o);
	_patch_child_end();
	_patch_render($scope0_id, "a0", [$fg__input_title && "d", $fg__input_n && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || $ui__input_title__OR__input_n) && input.title,
		e: (_unfilled_if($scope0_reason, 1) || $ui__input_title__OR__input_n) && input.n,
		a: _existing_scope($childScope)
	}) || ($fg__input_title && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
