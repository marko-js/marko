// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a, $sg__input_a)}</div><div>${_text_resume($scope0_id, "#text/1", input.b, $sg__input_b)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $sg__input_a2 = _serialize_guard($scope0_reason, 1), $sg__input_b2 = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_serialize_reason({
		0: $sg__input_a__OR__input_b,
		1: $sg__input_a2,
		2: $sg__input_b2
	});
	const $childScope = _peek_scope_id();
	child_default({
		a: input.a,
		b: input.b
	});
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope1_reason, 1), $sg__input_b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_text_resume($scope1_id, "#text/0", input.a, $sg__input_a)}</div><div>${_text_resume($scope1_id, "#text/1", input.b, $sg__input_b)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	_set_serialize_reason({
		0: $sg__input_a__OR__input_b,
		1: $sg__input_a2,
		2: $sg__input_b2
	});
	const $childScope2 = _peek_scope_id();
	Child.content({
		a: input.a,
		b: input.b
	});
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
