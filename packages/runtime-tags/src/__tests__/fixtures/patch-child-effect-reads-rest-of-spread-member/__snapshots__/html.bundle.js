// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0), $sg__input_item = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { k, ...rest } = input.item;
	_script($scope0_id, "b0", 0, $fg__input_item, ["e", "f"]);
	_scope($scope0_id, {
		e: k,
		f: rest
	}) || ($fg__input_item && _patch_write($scope0_id, "xe", k, !$sg__input_item), $fg__input_item && _patch_write($scope0_id, "xf", rest, !$sg__input_item, input.item));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const o = { item: {
		label: input.title,
		k: 1
	} };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	_patch_live($childScope, o.item, $scope0_id, "d");
	label_default(o);
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
}, 1);
