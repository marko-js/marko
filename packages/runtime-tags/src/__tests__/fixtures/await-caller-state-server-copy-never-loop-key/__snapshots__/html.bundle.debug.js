// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_for_of([x], (n, i) => {
			const $scope2_id = _scope_id();
			const $for_content__n__closures = new Set();
			_await($scope2_id, "#text/0", Promise.resolve(i), (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "#text/0", n, $wg__input_promise)}:${_escape(y)}</b>`);
				$wi__input_promise && _subscribe($for_content__n__closures, _scope($scope3_id, {}, "__tests__/tags/show-await.marko", "3:6"), "__tests__/tags/show-await.marko_3_n#2:2/subscribe", $wg__input_promise);
				$wg__input_promise || $wi__input_promise && _resume_branch($scope3_id);
			}, $wg__input_promise);
			$wi__input_promise && _scope($scope2_id, { "ClosureScopes:n/4": $for_content__n__closures }, "__tests__/tags/show-await.marko", "2:4");
		}, 0, $scope1_id, "#text/0", $wg__input_promise, $wg__input_promise);
		$wi__input_promise && _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, $wg__input_promise);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			show_await_default({ promise: p });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { p: _write_if($scope0_reason, 0) && p }, "__tests__/template.marko", 0, { p: "1:6" });
}, 1);
