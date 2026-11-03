// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}:${_text_resume($scope2_id, "b", x, $wg__input_promise * 2)}</p>`);
			$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}), "b0", $wg__input_promise || $wg__input_label);
			$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope2_id);
		}, _write_guard($scope0_reason, 0));
		$wi__input_promise__OR__input_label && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<p>waiting</p>");
	}, void 0, "b2");
	$wi__input_promise__OR__input_label && _scope($scope0_id, {
		g: $wi__input_label && $input_label__closures,
		f: $wi__input_promise && $input_promise__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
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
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: $wi__input_show && input.label,
		h: $wi__input_show && p,
		i: resolve
	});
}, 1);
