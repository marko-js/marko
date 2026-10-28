// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x && $global$1.flag) {
				const $scope2_id = _scope_id();
				let n = 3;
				_html(`<p>${_text_resume($scope2_id, "#text/0", x, $wg__input_promise)}:${_escape(n)}</p>`);
				$wi__input_promise && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_promise, $wg__input_promise, 0, 0, 1);
		$wi__input_promise && _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, $wg__input_promise);
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
