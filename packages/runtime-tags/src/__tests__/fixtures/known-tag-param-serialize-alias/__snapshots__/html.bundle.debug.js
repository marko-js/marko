// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope1_reason, 0), $sg__b = _serialize_guard($scope1_reason, 1);
		const { a, b } = input;
		_html(`<div>${_text_resume($scope1_id, "#text/0", a, $sg__input_a)}</div><div>${_text_resume($scope1_id, "#text/1", b, $sg__b)}</div>`);
		_script($scope1_id, "__tests__/template.marko_1_input_a#4", $sg__input_a || $sg__b);
		_script($scope1_id, "__tests__/template.marko_1_a#8", $sg__input_a || $sg__b);
		_scope($scope1_id, { input_a: input.a }, "__tests__/template.marko", "1:2", { input_a: ["input.a", "1:15"] });
	}, $scope0_id) };
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 1),
		1: _serialize_guard($scope0_reason, 2)
	});
	const $childScope = _peek_scope_id();
	Child.content({
		a: input.a,
		b: input.b
	});
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
