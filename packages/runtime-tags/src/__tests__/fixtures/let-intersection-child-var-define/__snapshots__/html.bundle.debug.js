// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Let = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let internal = 0;
		const $return = internal;
		writeScope($scope1_id, { "#TagVariableChange": _resume((_new_internal) => {
			internal = _new_internal;
		}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0 }, "__tests__/template.marko", "1:2");
		_resume_branch($scope1_id);
		return $return;
	}) };
	const $childScope = _peek_scope_id();
	let a = Let.content({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_a/var");
	let b = 0;
	_html(`<button>${_escape(`${a}`)},${_escape(`${b}`)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		a,
		b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "6:6",
		b: "7:6"
	});
	_resume_branch($scope0_id);
}, 1);
