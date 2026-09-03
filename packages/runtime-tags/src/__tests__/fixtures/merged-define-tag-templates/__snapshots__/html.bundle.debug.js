// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__value = _serialize_guard($scope1_reason, 0);
		_html(_text_resume($scope1_id, "#text/0", value, $sg__value));
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}, $scope0_id) };
	const B = { content: _content("__tests__/template.marko_2*content", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__value_length = _serialize_guard($scope2_reason, 0);
		_set_serialize_reason($sg__value_length);
		const $childScope = _peek_scope_id();
		A.content({ value: value.length });
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:1");
	}, $scope0_id) };
	let value = "";
	_set_serialize_reason(1);
	const $childScope2 = _peek_scope_id();
	B.content({ value });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
