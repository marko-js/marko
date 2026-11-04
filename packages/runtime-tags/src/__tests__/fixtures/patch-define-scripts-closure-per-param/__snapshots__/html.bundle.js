// template.marko
_shells({ a: "a;/&;" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_c = _client_guard($scope0_reason, 1), $fg__input_c = _filled_guard($scope0_reason, 1), $wi__input_c = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_c__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2);
		_script($scope1_id, "a2", 0, (_filled_guard($scope0_reason, 1) || $fg__a) && ($cg__input_c || _client_guard($scope1_reason, 1) ? 2 : 1), [_filled_guard($scope0_reason, 1) && ">d", $fg__a && "c"], "a3", (_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 1)) << 1, 0);
		_script($scope1_id, "a1", 0, (_filled_guard($scope0_reason, 1) || $fg__b) && ($cg__input_c || _client_guard($scope1_reason, 2) ? 2 : 1), [_filled_guard($scope0_reason, 1) && ">d", $fg__b && "e"], "a4", (_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 2)) << 1, 0);
		_subscribe(_unfilled_if((_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 0)) << 1, 0) && $wi__input_c && $input_c__closures, _scope($scope1_id, {
			c: a,
			e: b,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 0)) << 1, 0) && "a5", 0) || ($fg__a && _patch_write($scope1_id, "xc", a, !_server_guard($scope1_reason, 1)), $fg__b && _patch_write($scope1_id, "xe", b, !_server_guard($scope1_reason, 2)));
		_write_guard($scope0_reason, 1) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	$fg__input_c && _patch_subscribers($scope0_id, "a6", "d");
	_scope($scope0_id, {
		d: input.c,
		g: $wi__input_c && $input_c__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_c && _patch_write($scope0_id, "xd", input.c, !_server_guard($scope0_reason, 1));
}, 1);
