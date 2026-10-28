// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_b0:${_escape_style_value(x)};--M_b1:${_escape_style_value(input.label)};--M_b2:${_escape_style_value(x)};`)}${_el_resume($scope1_id, "a", $wg__input_promise__OR__input_label)}<p>${_text_resume($scope1_id, "b", x, $wg__input_promise)}</p>`);
		$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {}), "b3", $wg__input_promise__OR__input_label || $wg__input_promise);
		$wg__input_promise__OR__input_label || $wg__input_promise || $wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, $wg__input_promise__OR__input_label);
	$wi__input_label && _scope($scope0_id, { f: $input_label__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button class=prefix>prefix</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "c")}`);
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
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: $wi__input_show && input.label,
		k: $wi__input_show && p
	});
}, 1);
