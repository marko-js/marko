// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, $fg__input, "b");
	_scope($scope0_id, { b: input }) || $fg__input && _patch_write($scope0_id, "xb", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "a0", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default(_patch_live($childScope, { get: getTitle }, $scope0_id, "e d"));
	_patch_child_end();
	_scope($scope0_id, {
		d: input.title,
		a: _existing_scope($childScope)
	}) || $fg__input_title && _patch_write($scope0_id, "xe", getTitle, !$sg__input_title);
}, 1);
