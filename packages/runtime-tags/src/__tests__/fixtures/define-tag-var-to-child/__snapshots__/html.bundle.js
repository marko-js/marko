// tags/show-value.marko
var show_value_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "b", input.value, _write_guard($scope0_reason, 0))}</span>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.value });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Inc = { content: _content("a0", ({ a }) => {
		_scope_id();
		_scope_reason();
		return a + 1;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let x = Inc.content({ a: input.a });
	_var($scope0_id, "b", $childScope, "a1");
	_set_scope_reason($wg__input_a << 1);
	const $childScope2 = _peek_scope_id();
	show_value_default({ value: x });
	_if(() => {
		if (x > 1) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_a << 1);
			const $childScope3 = _peek_scope_id();
			show_value_default({ value: x });
			$wi__input_a && _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_a, $wg__input_a, 0, 0, 1);
	_for_until(x, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_a << 1);
		const $childScope4 = _peek_scope_id();
		show_value_default({ value: i + x });
		$wi__input_a && _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope4)
		});
	}, 0, $scope0_id, "e", $wg__input_a, $wg__input_a, 0, 0, 1);
	$wi__input_a && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
