// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", x, $wg__input_promise)}</p>`);
			$wi__input_promise && _scope($scope3_id, {});
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>caught</em>");
	}, void 0, "b1");
	$wi__input_promise && _scope($scope0_id, { e: $input_promise__closures });
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
