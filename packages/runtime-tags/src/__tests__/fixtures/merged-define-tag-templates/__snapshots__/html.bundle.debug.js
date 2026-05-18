// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content("__tests__/template.marko_1_content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_escape(value)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}) };
	const B = { content: _content("__tests__/template.marko_2_content", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_serialize_guard($scope2_reason, 0));
		A.content({ value: value.length });
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:1");
	}) };
	let value = "";
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	B.content({ value });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
