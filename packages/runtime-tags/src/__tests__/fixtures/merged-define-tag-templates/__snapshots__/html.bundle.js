// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content("a0", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0);
		_html(_text_resume($scope1_id, "a", value, $wg__value));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	const B = { content: _content("a1", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__value_length = _write_guard($scope2_reason, 0);
		_set_scope_reason($wg__value_length << 1);
		const $childScope = _peek_scope_id();
		A.content({ value: value.length });
		_write_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	let value = "";
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	B.content({ value });
	_script($scope0_id, "a2");
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
