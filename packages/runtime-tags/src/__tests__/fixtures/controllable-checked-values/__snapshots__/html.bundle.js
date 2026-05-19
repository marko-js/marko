// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = ["a", "b"];
	const $checkedValueChange = _resume((_new_checkedValue) => {
		checkedValue = _new_checkedValue;
	}, "a0", $scope0_id);
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", checkedValue, $checkedValueChange, "a")} type=checkbox>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", checkedValue, $checkedValueChange, "b")} type=checkbox>${_el_resume($scope0_id, "b")}<input${_attr_input_checkedValue($scope0_id, "c", checkedValue, $checkedValueChange, "c")} type=checkbox>${_el_resume($scope0_id, "c")}<span>${_escape(checkedValue)}${_el_resume($scope0_id, "d")}</span>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { f: $checkedValueChange });
	_resume_branch($scope0_id);
}, 1);
