// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 3), $wg__input_promise = _write_guard($scope0_reason, 4), $wg__input_label = _write_guard($scope0_reason, 5), $wi__input_items__OR__input_promise__OR__input_label = _write_if($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", item, $wg__input_items)}${_text_resume($scope2_id, "b", input.label, $wg__input_label * 2)}:${_text_resume($scope2_id, "c", x, $wg__input_promise * 2)}</p>`);
			$wi__input_items__OR__input_promise__OR__input_label && _subscribe($wi__input_items && $for_content__item__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}), "b0", $wg__input_items || $wg__input_promise || $wg__input_label), "b1", $wg__input_items || $wg__input_promise || $wg__input_label);
			$wg__input_items || $wg__input_promise || $wg__input_label || $wi__input_items__OR__input_promise__OR__input_label && _resume_branch($scope2_id);
		}, _write_guard($scope0_reason, 2));
		$wi__input_items__OR__input_promise__OR__input_label && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			i: $wi__input_items && $for_content__item__closures
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_items);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: $wi__input_items && input.promise,
		f: $wi__input_items && input.label,
		h: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
	_set_scope_reason(546 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 2) << 7 | _write_guard($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label,
		items: input.items
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
