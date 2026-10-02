// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_a = _write_guard($scope1_reason, 0), $wg__b = _write_guard($scope1_reason, 1);
		_html(`<div>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</div><div>${_text_resume($scope1_id, "b", input.b, $wg__b)}</div>`);
		_script($scope1_id, "a1", $wg__input_a || $wg__b);
		_script($scope1_id, "a2", $wg__input_a || $wg__b);
		_scope($scope1_id, { e: input.a });
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | _write_guard($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id();
	Child.content({
		a: input.a,
		b: input.b
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
