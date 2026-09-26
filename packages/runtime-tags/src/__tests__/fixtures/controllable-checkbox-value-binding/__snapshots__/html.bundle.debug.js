// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	let h = "b";
	let s = "c";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}${_attr("type", input.checkboxType)}>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", h, _resume((_new_h) => {
		h = _new_h;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id))}${_attr("type", input.hiddenType)}>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_value($scope0_id, "#input/2", s, _resume((_new_s) => {
		s = _new_s;
	}, "__tests__/template.marko_0/valueChange3", $scope0_id))}${_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "#input/2", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_checkboxType: input.checkboxType,
		input_hiddenType: input.hiddenType,
		v: _serialize_if($scope0_reason, 0) && v,
		h: _serialize_if($scope0_reason, 1) && h
	}, "__tests__/template.marko", 0, {
		input_checkboxType: ["input.checkboxType"],
		input_hiddenType: ["input.hiddenType"],
		v: "1:6",
		h: "2:6",
		"ControlledHandler:#input/0": ["valueChange"],
		"ControlledHandler:#input/1": ["valueChange"],
		"ControlledHandler:#input/2": ["valueChange"]
	});
}, 1);
