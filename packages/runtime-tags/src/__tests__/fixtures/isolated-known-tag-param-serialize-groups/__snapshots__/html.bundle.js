// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $wg__input_a)}</div><div>${_text_resume($scope0_id, "b", input.b, $wg__input_b)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0), $wg__input_a2 = _write_guard($scope0_reason, 1), $wg__input_b2 = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_a__OR__input_b << 1 | $wg__input_a2 << 3 | $wg__input_b2 << 5);
	const $childScope = _peek_scope_id();
	child_default({
		a: input.a,
		b: input.b
	});
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_a = _write_guard($scope1_reason, 1), $wg__input_b = _write_guard($scope1_reason, 2);
		_html(`<div>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</div><div>${_text_resume($scope1_id, "b", input.b, $wg__input_b)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason($wg__input_a__OR__input_b << 1 | $wg__input_a2 << 3 | $wg__input_b2 << 5);
	const $childScope2 = _peek_scope_id();
	Child.content({
		a: input.a,
		b: input.b
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
