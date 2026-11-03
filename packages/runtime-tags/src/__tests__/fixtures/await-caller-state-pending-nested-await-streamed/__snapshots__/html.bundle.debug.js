// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 4), $wi__input_inner = _write_if($scope0_reason, 4), $wg__input_promise = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 3), $wi__input_promise__OR__input_label__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}:${_text_resume($scope1_id, "#text/1", x, $wg__input_promise * 2)}</p>`);
		_try($scope1_id, "#text/2", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.inner, (y) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", y, $wg__input_inner)}</em>`);
				$wi__input_inner && _scope($scope4_id, {}, "__tests__/tags/show-await.marko", "5:6");
			}, $wg__input_inner);
			$wi__input_inner && _subscribe($input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), "__tests__/tags/show-await.marko_2_input_inner#0:5/subscribe", 0);
			$wi__input_inner && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("<i>inner loading</i>");
		}, void 0, "__tests__/tags/show-await.marko_3*content");
		$wi__input_promise__OR__input_label__OR__input_inner && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", $wg__input_promise || $wg__input_label);
		$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label__OR__input_inner && _resume_branch($scope1_id);
	}, _write_guard($scope0_reason, 1));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		"ClosureScopes:input_inner/7": $wi__input_inner && $input_inner__closures,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(40 | (_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 7 | _write_guard($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label,
		inner: input.inner
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		resolve,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { resolve: "2:6" });
}, 1);
