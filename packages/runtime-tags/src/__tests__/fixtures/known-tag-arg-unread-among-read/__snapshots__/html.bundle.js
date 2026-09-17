// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_text_resume($scope1_id, "a", a, _serialize_guard($scope1_reason, 0))}</span>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_serialize_reason($sg__input_a << 1);
	const $childScope = _peek_scope_id();
	Foo.content(input.a, void 0);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
