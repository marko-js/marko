// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "5";
	let type = "number";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}${_attr("type", type)}>${_el_resume($scope0_id, "#input/0")}<input${_attrs({
		type,
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "__tests__/template.marko_0/valueChange2", $scope0_id)
	}, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<button></button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_value#3_type#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		value,
		type
	}, "__tests__/template.marko", 0, {
		value: "1:6",
		type: "2:6",
		"ControlledHandler:#input/0": ["valueChange"],
		"ControlledHandler:#input/1": ["...{ type, value, valueChange(next) { value = next } }", "4:11"],
		"EventAttributes:#input/1": ["...{ type, value, valueChange(next) { value = next } }", "4:11"]
	});
}, 1);
