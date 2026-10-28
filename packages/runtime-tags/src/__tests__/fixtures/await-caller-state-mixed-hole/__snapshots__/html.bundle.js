// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ":" + x, $wg__input_promise__OR__input_label)}</p>`);
		$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { c: $wi__input_label && x }), "b0", $wg__input_promise__OR__input_label);
		$wg__input_promise__OR__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, $wg__input_promise__OR__input_label);
	$wi__input_promise__OR__input_label && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
