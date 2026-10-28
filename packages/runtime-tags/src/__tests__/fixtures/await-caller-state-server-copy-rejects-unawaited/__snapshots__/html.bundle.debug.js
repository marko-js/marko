// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", x, $wg__input_promise)}</p>`);
			$wi__input_promise && _scope($scope3_id, {}, "__tests__/tags/show-await.marko", "3:4");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2"), "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>caught</em>");
	}, void 0, "__tests__/tags/show-await.marko_2*content");
	$wi__input_promise && _scope($scope0_id, { "ClosureScopes:input_promise/4": $input_promise__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	show_await_default({ promise: p });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
