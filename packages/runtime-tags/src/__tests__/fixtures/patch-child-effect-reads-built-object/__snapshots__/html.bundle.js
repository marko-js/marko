// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, $fg__input_item);
	_scope($scope0_id, { c: input.item }) || $fg__input_item && _patch_write($scope0_id, "xc", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ item });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
