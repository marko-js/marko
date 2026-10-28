// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let b = x;
		let a = {
			v: b,
			self: _resume(() => a, "b0", $scope1_id)
		};
		_html(`<p>${_escape(b)}|${_text_resume($scope1_id, "b", input.label, _write_guard($scope0_reason, 0) * 2)}</p><button class=log>log</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "b1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			g: a,
			i: a?.v
		}), "b2");
	});
	$wi__input_label && _scope($scope0_id, { f: $input_label__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
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
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: $wi__input_show && input.label,
		h: $wi__input_show && p
	});
}, 1);
