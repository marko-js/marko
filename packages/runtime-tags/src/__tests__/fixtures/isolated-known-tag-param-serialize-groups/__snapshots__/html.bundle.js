// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</div><div>${_escape(input.b)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_a__OR__input_b,
		1: $sg__input_a,
		2: $sg__input_b
	});
	child_default({
		a: input.a,
		b: input.b
	});
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(input.a)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))}</div><div>${_escape(input.b)}${_el_resume($scope1_id, "b", _serialize_guard($scope1_reason, 2))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_a__OR__input_b,
		1: $sg__input_a,
		2: $sg__input_b
	});
	Child.content({
		a: input.a,
		b: input.b
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
