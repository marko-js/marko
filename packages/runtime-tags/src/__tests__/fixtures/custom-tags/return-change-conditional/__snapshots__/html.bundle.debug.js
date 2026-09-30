// tags/editable.marko
var editable_default = _template("__tests__/tags/editable.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "a";
	const $return = x;
	_scope($scope0_id, {
		input_canEdit: input.canEdit,
		"#TagVariableChange": input.canEdit && _resume((v) => {
			x = v;
		}, "__tests__/tags/editable.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/tags/editable.marko", 0, { input_canEdit: ["input.canEdit"] });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let canEdit = true;
	const $childScope = _peek_scope_id();
	let val = editable_default({ canEdit });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_val#6/var");
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}<button id=assign>assign</button>${_el_resume($scope0_id, "#button/3")}<div>${_text_resume($scope0_id, "#text/4", val)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		val,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { val: "2:11" });
}, 1);
