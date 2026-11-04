// template.marko
_shells({ a: "a;/&;" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const sep = ":";
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 0), $fg__b = _filled_guard($scope1_reason, 1);
		_script($scope1_id, "a2", 0, $fg__a, $fg__a && "c", "a3", $scope1_reason, 0);
		_script($scope1_id, "a1", 0, $fg__b, $fg__b && "e", "a4", $scope1_reason, 1);
		_scope($scope1_id, {
			c: a,
			e: b,
			_: _scope_with_id($scope0_id)
		}) || ($fg__a && _patch_write($scope1_id, "xc", a, !_server_guard($scope1_reason, 0)), $fg__b && _patch_write($scope1_id, "xe", b, !_server_guard($scope1_reason, 1)));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: sep,
		a: _existing_scope($childScope)
	});
}, 1);
