// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = 0;
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", checked + "", _resume(function(v) {
		checked = +v;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), 0)} type=radio>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", checked, _resume(function(v) {
		checked = +v;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "1")} type=radio>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_checkedValue($scope0_id, "#input/2", checked, _resume(function(v) {
		checked = +v;
	}, "__tests__/template.marko_0/checkedValueChange3", $scope0_id), 2)} type=radio>${_el_resume($scope0_id, "#input/2")}<span>${_text_resume($scope0_id, "#text/3", checked)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["checkedValueChange", "3:53"],
		"ControlledHandler:#input/1": ["checkedValueChange", "4:52"],
		"ControlledHandler:#input/2": ["checkedValueChange", "5:50"]
	});
}, 1);
