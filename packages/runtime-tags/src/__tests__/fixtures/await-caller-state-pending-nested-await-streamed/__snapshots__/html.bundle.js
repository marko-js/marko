// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 4), $wi__input_inner = _write_if($scope0_reason, 4), $wg__input_promise = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 3), $wi__input_promise__OR__input_label__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}:${_text_resume($scope1_id, "b", x, $wg__input_promise * 2)}</p>`);
		_try($scope1_id, "c", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.inner, (y) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", y, $wg__input_inner)}</em>`);
				$wi__input_inner && _scope($scope4_id, {});
			}, $wg__input_inner);
			$wi__input_inner && _subscribe($input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", 0);
			$wi__input_inner && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<i>inner loading</i>");
		}, void 0, "b1");
		$wi__input_promise__OR__input_label__OR__input_inner && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {}), "b2", $wg__input_promise || $wg__input_label);
		$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label__OR__input_inner && _resume_branch($scope1_id);
	}, _write_guard($scope0_reason, 1));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		h: $wi__input_inner && $input_inner__closures,
		g: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
	_set_scope_reason(40 | (_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 7 | _write_guard($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label,
		inner: input.inner
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
