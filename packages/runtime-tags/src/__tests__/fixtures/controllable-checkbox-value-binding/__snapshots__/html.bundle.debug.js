// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	let h = "b";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}${_attr("type", input.checkboxType)}>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", h, _resume((_new_h) => {
		h = _new_h;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id))}${_attr("type", input.hiddenType)}>${_el_resume($scope0_id, "#input/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["valueChange"],
		"ControlledHandler:#input/1": ["valueChange"]
	});
	_resume_branch($scope0_id);
}, 1);
