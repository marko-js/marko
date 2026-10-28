// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", x ? "b" : "i", { class: "k" }, _content("__tests__/tags/show-await.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(_text_resume($scope2_id, "#text/0", x, $wg__input_promise));
			$wi__input_promise && _subscribe($await_content__x__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "2:6"), "__tests__/tags/show-await.marko_2_x#1:2/subscribe", $wg__input_promise);
			$wg__input_promise || $wi__input_promise && _resume_branch($scope2_id);
		}, $scope1_id), 0, $wg__input_promise);
		$wi__input_promise && _scope($scope1_id, { "ClosureScopes:x/3": $await_content__x__closures }, "__tests__/tags/show-await.marko", "1:2");
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
