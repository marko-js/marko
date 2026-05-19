// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = ["a", "b"];
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", checkedValue, $checkedValueChange, "a")} type=checkbox>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", checkedValue, $checkedValueChange, "b")} type=checkbox>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_checkedValue($scope0_id, "#input/2", checkedValue, $checkedValueChange, "c")} type=checkbox>${_el_resume($scope0_id, "#input/2")}<span>${_escape(checkedValue)}${_el_resume($scope0_id, "#text/3")}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { $checkedValueChange }, "__tests__/template.marko", 0, { $checkedValueChange: 0 });
	_resume_branch($scope0_id);
}, 1);
