// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_promise__OR__input_other = _write_if($scope0_reason, 0), $wi__input_other = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_other__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_html(`<p>${_text_resume($scope1_id, "a", x, $wg__input_promise)}</p>`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.other, (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", x, $wg__input_promise)}</b>`);
				$wi__input_promise && _subscribe($await_content__x__closures, _scope($scope3_id, {}), "b0", $wg__input_promise);
				$wg__input_promise || $wi__input_promise && _resume_branch($scope3_id);
			}, $wg__input_promise);
			$wi__input_promise__OR__input_other && _subscribe($wi__input_other && $input_other__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", 0);
			$wi__input_promise__OR__input_other && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<span>caught</span>");
		}, void 0, "b2");
		$wi__input_promise__OR__input_other && _scope($scope1_id, { g: $wi__input_promise && $await_content__x__closures });
	}, _write_guard($scope0_reason, 0));
	$wi__input_other && _scope($scope0_id, { f: $input_other__closures });
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
		other: input.other
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
