// template.marko
_shells({
	a6: "a6",
	a7: "a7;/&;<!><!>",
	a8: "a8;/&;<!><!>",
	a9: "a9;b%;<!><!><!>",
	a: "a !;/&b%;<pre id=log></pre><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $fn2__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !$sg__input_x);
	const fn = _bind_resume(() => input.x, "a0", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("a1", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_script($scope3_id, "a2", 0);
		(_filled_guard($scope3_reason, 1) || _filled_guard($scope3_reason, 2)) && _patch_effect($scope3_id, _client_guard($scope3_reason, 1) || _client_guard($scope3_reason, 2) ? "ha2" : "ea2", _filled_guard($scope3_reason, 1) && "c", _filled_guard($scope3_reason, 2) && "d");
		_client_guard($scope3_reason, 0) && _patch_init($scope3_id, "a3");
		$scope3_page ? _scope($scope3_id, {
			c: fn,
			d: where
		}) : (_filled_guard($scope3_reason, 1) && _patch_write($scope3_id, "xc", fn, !_server_guard($scope3_reason, 1)), _filled_guard($scope3_reason, 2) && _patch_write($scope3_id, "xd", where, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	Use.content({
		fn,
		where: "early"
	});
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope2_id, "a");
			Use.content({
				fn,
				where: "late"
			});
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_x ? "a4" : "a5");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $fn2__closures, _scope($scope2_id, {
				_: $wi__input_x__OR__input_promise && _scope_with_id($scope1_id),
				a: _existing_scope($childScope2)
			}), $cg__input_x && "a5");
		}, 1, "a7", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_promise ? "a10" : "a11");
		$scope0_page && $wi__input_x__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a11", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a6", void 0, "a9", 1, void 0, 2);
	$scope0_page ? _scope($scope0_id, {
		e: input.x,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fn,
		a: _existing_scope($childScope),
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $fn2__closures,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 1) && $cg__input_promise && _patch_fill($scope0_id, "va12", fn, !$sg__input_x);
}, 1);
