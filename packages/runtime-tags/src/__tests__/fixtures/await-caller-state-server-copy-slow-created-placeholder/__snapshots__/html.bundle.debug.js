// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}:${_text_resume($scope2_id, "#text/1", x, $wg__input_promise * 2)}</p>`);
			$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "3:4"), "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe", $wg__input_promise || $wg__input_label);
			$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope2_id);
		}, _write_guard($scope0_reason, 0));
		$wi__input_promise__OR__input_label && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2"), "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>waiting</em>");
	}, void 0, "__tests__/tags/show-await.marko_3*content");
	$wi__input_promise__OR__input_label && _scope($scope0_id, {
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_promise/5": $wi__input_promise && $input_promise__closures
	}, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = input.promise;
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10 | _write_guard($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id();
			show_await_default({
				promise: p,
				label: input.label
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		p: $wi__input_show && p,
		resolve
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6",
		resolve: "2:6"
	});
}, 1);
