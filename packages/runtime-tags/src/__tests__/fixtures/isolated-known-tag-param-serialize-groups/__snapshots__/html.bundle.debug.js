// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</div><div>${_escape(input.b)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	const Child = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(input.a)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 1))}</div><div>${_escape(input.b)}${_el_resume($scope1_id, "#text/1", _serialize_guard($scope1_reason, 2))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
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
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
