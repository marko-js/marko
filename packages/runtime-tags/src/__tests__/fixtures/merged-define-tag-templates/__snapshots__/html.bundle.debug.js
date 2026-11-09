// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_mark($scope1_id, "#text/0", value, 2));
		_scope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}, $scope0_id) };
	const B = { content: _content("__tests__/template.marko_2*content", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		A.content({ value: value.length });
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:1");
	}, $scope0_id) };
	let value = "";
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	B.content({ value });
	_script($scope0_id, "__tests__/template.marko_0", 0);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
