// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $textarea_input = input;
	_html(`<textarea${_attrs($textarea_input, "#textarea/0", $scope0_id, "textarea")}>${_attr_textarea_value($scope0_id, "#textarea/0", $textarea_input.value, $textarea_input.valueChange, 1)}</textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
