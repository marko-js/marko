// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", "a", void 0, "a")} type=radio><input${_attr_input_checkedValue($scope0_id, "#input/1", "a", void 0, "b")} type=radio><input${_attr_input_checkedValue($scope0_id, "#input/2", value, void 0, "b")} type=radio>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_checkedValue($scope0_id, "#input/3", value, undefined, "b")} type=radio>${_el_resume($scope0_id, "#input/3")}<button>Update</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
