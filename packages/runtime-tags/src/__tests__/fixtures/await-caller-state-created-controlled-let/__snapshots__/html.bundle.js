// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let g = a + ":" + input.label;
		_html(`<p>${_text_resume($scope1_id, "a", g)}</p><button class=g>g</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			e: $wi__input_label && a,
			h: _resume(function(v) {
				a = v;
			}, "b0", $scope1_id) || void 0
		}), "b2");
	});
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = input.label;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			show_await_default({
				promise: input.promise,
				label: l
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: $wi__input_show && input.promise,
		h: $wi__input_show && l
	});
}, 1);
