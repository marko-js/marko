// tags/show-value.marko
var show_value_default = _template("__tests__/tags/show-value.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/1", input.value, _write_guard($scope0_reason, 0))}</span>${_el_resume($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/tags/show-value.marko_0_input_value#4");
	_scope($scope0_id, { input_value: input.value }, "__tests__/tags/show-value.marko", 0, { input_value: ["input.value"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Inc = { content: _content("__tests__/template.marko_1*content", ({ a }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = a + 1;
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let x = Inc.content({ a: input.a });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_x#8/var");
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
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_a, $wg__input_a, 0, 0, 1);
	_for_until(x, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_a << 1);
		const $childScope4 = _peek_scope_id();
		show_value_default({ value: i + x });
		$wi__input_a && _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope4)
		}, "__tests__/template.marko", "9:2");
	}, 0, $scope0_id, "#text/4", $wg__input_a, $wg__input_a, 0, 0, 1);
	$wi__input_a && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
