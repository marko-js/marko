// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1*content", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__a = _serialize_guard($scope1_reason, 0);
		_html(`<span>${_text_resume($scope1_id, "#text/0", a, $sg__a)}</span>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_serialize_reason($sg__input_a << 1);
	const $childScope = _peek_scope_id();
	Foo.content(input.a, void 0);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
