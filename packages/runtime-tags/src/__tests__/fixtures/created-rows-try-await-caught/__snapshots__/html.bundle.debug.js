// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.promise, () => {
				const $scope4_id = _scope_id();
				_html("done");
			}, 0);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/outer.marko", "3:22"), "__tests__/tags/outer.marko_2_input_promise#0:4/subscribe", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("error");
		}, void 0, "__tests__/tags/outer.marko_3*content");
		_scope($scope1_id, {}, "__tests__/tags/outer.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {
		input_promise: input.promise,
		"ClosureScopes:input_promise/6": $wi__input_promise && $input_promise__closures
	}, "__tests__/tags/outer.marko", 0, { input_promise: ["input.promise"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_promise << 1);
			const $childScope = _peek_scope_id();
			outer_default({ promise: input.promise });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_promise && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_promise && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1);
