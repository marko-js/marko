// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", Promise.resolve(x + 10), (y) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}:${_text_resume($scope2_id, "b", x, $wg__input_promise * 2)}:${_text_resume($scope2_id, "c", y, $wg__input_promise * 2)}</p>`);
			$wi__input_promise__OR__input_label && _subscribe($wi__input_promise && $await_content__x__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}), "b0", $wg__input_promise || $wg__input_label), "b1", $wg__input_promise || $wg__input_label);
			$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope2_id);
		}, $wg__input_promise__OR__input_label);
		$wi__input_promise__OR__input_label && _scope($scope1_id, { g: $wi__input_promise && $await_content__x__closures });
	}, $wg__input_promise__OR__input_label);
	$wi__input_label && _scope($scope0_id, { f: $input_label__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: Promise.resolve(n),
		label: input.label
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		b: _existing_scope($childScope)
	});
}, 1);
