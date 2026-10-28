// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_x = _write_if($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $fn2__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const fn = _resume(() => input.x, "a0", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("a1", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_script($scope3_id, "a2", 0);
		_scope($scope3_id, {
			c: fn,
			d: where
		});
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Use.content({
		fn,
		where: "early"
	});
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			const $childScope2 = _peek_scope_id();
			Use.content({
				fn,
				where: "late"
			});
			$wi__input_x && _subscribe($fn2__closures, _scope($scope2_id, { a: _existing_scope($childScope2) }), "a3", $wg__input_x);
			$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
		}, $wg__input_x);
		$wi__input_x__OR__input_promise && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a4", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a5");
	_scope($scope0_id, {
		e: input.x,
		a: $wi__input_x && _existing_scope($childScope),
		i: $wi__input_x && $fn2__closures,
		h: $wi__input_promise && $input_promise__closures
	});
}, 1);
