// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = input.rest;
	_attrs_select_value($scope0_id, "#select/0", $select_input, () => {
		_html(`<select${_attrs($select_input, "#select/0", $scope0_id, "select")}><option${_attr_option_value("one")}>one</option></select>`);
	});
	const $textarea_input = input.rest;
	_html(`${_el_resume($scope0_id, "#select/0")}<textarea${_attrs($textarea_input, "#textarea/1", $scope0_id, "textarea")}>${_attrs_textarea_value($scope0_id, "#textarea/1", $textarea_input)}</textarea>${_el_resume($scope0_id, "#textarea/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_rest#4");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#select/0": ["...input.rest", "1:12"],
		"EventAttributes:#select/0": ["...input.rest", "1:12"],
		"ControlledHandler:#textarea/1": ["...input.rest", "4:14"],
		"EventAttributes:#textarea/1": ["...input.rest", "4:14"]
	});
}, 1);
