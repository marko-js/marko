// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, _filled_guard($scope0_reason, 0), "c");
	_scope($scope0_id, { c: input.item }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${_w0}`)("") });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ item: _patch_live($childScope, { label: input.title }, $scope0_id, "d") });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
}, 1);
