// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_x = _write_if($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $fn2__closures = new Set();
	const $input_promise__closures = new Set();
	const fn = _resume(() => input.x, "__tests__/template.marko_0/fn", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("__tests__/template.marko_3*content", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_script($scope3_id, "__tests__/template.marko_3_fn#2_where#3", 0);
		_scope($scope3_id, {
			fn,
			where
		}, "__tests__/template.marko", "3:2", {
			fn: "3:15",
			where: "3:19"
		});
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Use.content({
		fn,
		where: "early"
	});
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			const $childScope2 = _peek_scope_id();
			Use.content({
				fn,
				where: "late"
			});
			$wi__input_x && _subscribe($fn2__closures, _scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "12:4"), "__tests__/template.marko_2_fn#0:6/subscribe", $wg__input_x);
			$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
		}, $wg__input_x);
		$wi__input_x__OR__input_promise && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2"), "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content");
	_scope($scope0_id, {
		input_x: input.x,
		"#childScope/0": $wi__input_x && _existing_scope($childScope),
		"ClosureScopes:fn/8": $wi__input_x && $fn2__closures,
		"ClosureScopes:input_promise/7": $wi__input_promise && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] });
}, 1);
