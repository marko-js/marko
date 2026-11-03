// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 4), $wg__input_label = _write_guard($scope0_reason, 5), $wi__input_show__OR__input_promise__OR__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}:${_text_resume($scope2_id, "#text/1", x, $wg__input_promise * 2)}</p>`);
				$wi__input_show__OR__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "2:4"), "__tests__/tags/show-await.marko_2_input_label#0:5/subscribe", $wg__input_promise || $wg__input_label);
				$wg__input_promise || $wg__input_label || $wi__input_show__OR__input_promise__OR__input_label && _resume_branch($scope2_id);
			}, _write_guard($scope0_reason, 2));
			$wi__input_show__OR__input_promise__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_promise: $wi__input_show && input.promise,
		input_label: $wi__input_show && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(546 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 2) << 7 | _write_guard($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label,
		show: input.show
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		resolve,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { resolve: "2:6" });
}, 1);
