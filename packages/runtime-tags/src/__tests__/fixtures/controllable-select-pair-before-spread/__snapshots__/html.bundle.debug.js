// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = {
		value: input.value,
		valueChange: input.valueChange,
		...input.attrs
	};
	_attrs_select_value($scope0_id, "#select/0", $select_input, () => {
		_html(`<select${_attrs($select_input, "#select/0", $scope0_id, "select")}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/0"));
	_script($scope0_id, "__tests__/template.marko_0_input_value#3_input_valueChange#4_input_attrs#5");
	_scope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 2) && input.value,
		input_valueChange: _serialize_if($scope0_reason, 1) && input.valueChange,
		input_attrs: _serialize_if($scope0_reason, 0) && input.attrs
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		input_attrs: ["input.attrs"],
		"ControlledHandler:#select/0": ["...input.attrs", "1:60"],
		"EventAttributes:#select/0": ["...input.attrs", "1:60"]
	});
}, 1);
