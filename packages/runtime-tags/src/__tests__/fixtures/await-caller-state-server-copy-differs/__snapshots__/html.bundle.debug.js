// tags/echo.marko
var echo_default = _template("__tests__/tags/echo.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value_length = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value.length, $wg__input_value_length)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/echo.marko", 0);
});

// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const upper = x.toUpperCase();
		_html(`<p${_attr("title", x)}>${_text_resume($scope1_id, "#text/1", input.label, $wg__input_label)}:${_text_resume($scope1_id, "#text/2", x, $wg__input_promise * 2)}:${_text_resume($scope1_id, "#text/3", upper, $wg__input_promise * 2)}:${_text_resume($scope1_id, "#text/4", input.label + x, $wg__input_promise__OR__input_label * 2)}</p>${_el_resume($scope1_id, "#p/0", $wg__input_promise)}`);
		_if(() => {
			if (x.length > 6) {
				const $scope2_id = _scope_id();
				_html("<em>long</em>");
				$wi__input_promise && _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/5", $wg__input_promise, $wg__input_promise, 0, 0, 1);
		_set_scope_reason($wg__input_promise << 1);
		const $childScope = _peek_scope_id();
		echo_default({ value: x });
		$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			x: $wi__input_label && x,
			"#childScope/6": $wi__input_promise && _existing_scope($childScope)
		}, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" }), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", $wg__input_promise__OR__input_label || $wg__input_promise || $wg__input_label);
		$wg__input_promise__OR__input_label || $wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, $wg__input_promise__OR__input_label);
	$wi__input_promise__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_promise && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] });
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
		label: input.label
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
