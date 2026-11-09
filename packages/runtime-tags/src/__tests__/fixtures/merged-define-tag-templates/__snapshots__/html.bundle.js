// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content("a0", ({ value }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", value, 2));
		_scope($scope1_id, {});
	}, $scope0_id) };
	const B = { content: _content("a1", ({ value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		A.content({ value: value.length });
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	let value = "";
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	B.content({ value });
	_script($scope0_id, "a2", 0);
	_scope($scope0_id, { a: _existing_scope($childScope2) });
	_resume_branch($scope0_id);
}, 1);
