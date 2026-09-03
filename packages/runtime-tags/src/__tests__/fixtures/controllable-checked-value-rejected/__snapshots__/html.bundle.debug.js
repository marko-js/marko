// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = "a";
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", picked, _resume(function() {}, "__tests__/template.marko_0/checkedValueChange"), "a")} type=radio name=pick>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", picked, _resume(function() {}, "__tests__/template.marko_0/checkedValueChange2"), "b")} type=radio name=pick>${_el_resume($scope0_id, "#input/1")}<span>${_escape(picked)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["checkedValueChange", "2:63"],
		"ControlledHandler:#input/1": ["checkedValueChange", "3:63"]
	});
}, 1);
