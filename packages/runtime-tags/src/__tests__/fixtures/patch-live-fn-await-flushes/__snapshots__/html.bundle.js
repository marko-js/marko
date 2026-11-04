// template.marko
_shells({
	a5: "a5",
	a6: "a6;/&;",
	a7: "a7;/&;",
	a8: "a8;b%;<!><!><!>",
	a: "a;/&b%;<pre id=log></pre><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 1), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $fn2__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 1));
	const fn = _bind_resume(() => input.x, "a0", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("a1", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $fg__fn = _filled_guard($scope3_reason, 1), $fg__where = _filled_guard($scope3_reason, 2);
		_script($scope3_id, "a2", 0, ($fg__fn || $fg__where) && (_client_guard($scope3_reason, 1) || _client_guard($scope3_reason, 2) ? 2 : 1), [
			$fg__fn && "c",
			_filled_guard($scope0_reason, 1) && ">e",
			$fg__where && "d"
		], "a3", $scope3_reason, 0);
		_scope($scope3_id, {
			c: fn,
			d: where
		}) || ($fg__fn && _patch_write($scope3_id, "xc", fn, !_server_guard($scope3_reason, 1)), $fg__where && _patch_write($scope3_id, "xd", where, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Use.content({
		fn,
		where: "early"
	});
	_patch_child_end();
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			Use.content({
				fn,
				where: "late"
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a4", $cg__input_x);
			_subscribe($wi__input_x && $fn2__closures, _scope($scope2_id, { a: _existing_scope($childScope2) }), $cg__input_x && "a4", 0);
			_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
		}, 1, "a6", _unfilled_if($scope0_reason, 2), 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a9", 1);
		$wi__input_x__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a9", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a5", void 0, "a8", 1, 0, 2);
	_scope($scope0_id, {
		e: input.x,
		a: _existing_scope($childScope),
		i: $wi__input_x && $fn2__closures,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1);
