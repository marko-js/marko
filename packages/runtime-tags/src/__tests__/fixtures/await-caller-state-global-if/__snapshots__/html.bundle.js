// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x, $wg__input_promise)}</p>`);
		_if(() => {
			if (x && $global$1.flag) {
				const $scope2_id = _scope_id();
				_html("<b>on</b>");
				$wi__input_promise && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b", $wg__input_promise, $wg__input_promise, 0, 0, 1);
		$wi__input_promise && _scope($scope1_id, {});
	}, $wg__input_promise);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	show_await_default({ promise: p });
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
