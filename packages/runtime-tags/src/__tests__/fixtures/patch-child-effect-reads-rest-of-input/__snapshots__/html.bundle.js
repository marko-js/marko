// tags/label.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_k = _filled_guard($scope0_reason, 1), $fg__rest = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { k, ...rest } = input;
	_script($scope0_id, "b0", 0, ($fg__input_k || $fg__rest) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_k && "c", $fg__rest && "d"], "b1", $scope0_reason, 0);
	_scope($scope0_id, {
		c: k,
		d: rest
	}) || ($fg__input_k && _patch_write($scope0_id, "xc", k, !_server_guard($scope0_reason, 1)), $fg__rest && _patch_write($scope0_id, "xd", rest, !_server_guard($scope0_reason, 2), input));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default(_patch_live($childScope, {
		k: 1,
		title: _patch_live($childScope, input.title, $scope0_id, "d"),
		item: _patch_live($childScope, { label: input.title }, $scope0_id, "d")
	}, $scope0_id, "d"));
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
}, 1);
