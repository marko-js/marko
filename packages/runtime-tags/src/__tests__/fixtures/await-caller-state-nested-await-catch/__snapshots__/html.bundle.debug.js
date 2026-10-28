// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_promise__OR__input_other = _write_if($scope0_reason, 0), $wi__input_other = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_other__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, $wg__input_promise)}</p>`);
		_try($scope1_id, "#text/1", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.other, (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "#text/0", x, $wg__input_promise)}</b>`);
				$wi__input_promise && _subscribe($await_content__x__closures, _scope($scope3_id, {}, "__tests__/tags/show-await.marko", "4:6"), "__tests__/tags/show-await.marko_3_x#1:3/subscribe", $wg__input_promise);
				$wg__input_promise || $wi__input_promise && _resume_branch($scope3_id);
			}, $wg__input_promise);
			$wi__input_promise__OR__input_other && _subscribe($wi__input_other && $input_other__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), "__tests__/tags/show-await.marko_2_input_other#0:4/subscribe", 0);
			$wi__input_promise__OR__input_other && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("<span>caught</span>");
		}, void 0, "__tests__/tags/show-await.marko_4*content");
		$wi__input_promise__OR__input_other && _scope($scope1_id, { "ClosureScopes:x/6": $wi__input_promise && $await_content__x__closures }, "__tests__/tags/show-await.marko", "1:2");
	}, _write_guard($scope0_reason, 0));
	$wi__input_other && _scope($scope0_id, { "ClosureScopes:input_other/5": $input_other__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		other: input.other
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
