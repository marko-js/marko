// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.onChange)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 1) && input.value,
		input_onChange: _serialize_if($scope0_reason, 0) && input.onChange
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_onChange: ["input.onChange"]
	});
}, 1);
