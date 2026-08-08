// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $valueChange2 = _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange3", $scope0_id);
	const $valueChange = _resume((_new_value) => {
		value = parseInt(_new_value);
	}, "__tests__/template.marko_0/valueChange4", $scope0_id);
	_html(`<input${_attr_input_value($scope0_id, "#input/0", value, $valueChange)} id=refined>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", value, $valueChange)} id=refined2>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_value($scope0_id, "#input/2", value, $valueChange2)} id=plain>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_value($scope0_id, "#input/3", value, $valueChange2)} id=plain2>${_el_resume($scope0_id, "#input/3")}<div>${_escape(typeof value)}${_el_resume($scope0_id, "#text/4")} <!>${_escape(value)}${_el_resume($scope0_id, "#text/5")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		$valueChange2,
		$valueChange
	}, "__tests__/template.marko", 0, {
		$valueChange2: 0,
		$valueChange: 0,
		"ControlledHandler:#input/0": ["valueChange"],
		"ControlledHandler:#input/1": ["valueChange"],
		"ControlledHandler:#input/2": ["valueChange"],
		"ControlledHandler:#input/3": ["valueChange"]
	});
	_resume_branch($scope0_id);
}, 1);
