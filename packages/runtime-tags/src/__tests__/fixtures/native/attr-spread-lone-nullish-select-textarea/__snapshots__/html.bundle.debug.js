// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { attrs } = input;
	const $select_input = attrs;
	_attrs_select_value($scope0_id, "#select/0", $select_input, () => {
		_html(`<select${_attrs($select_input, "#select/0", $scope0_id, "select")}><option${_attr_option_value("one")}>one</option><option${_attr_option_value("")}>empty</option></select>`);
	});
	const $textarea_input = attrs;
	_html(`${_el_resume($scope0_id, "#select/0")}<textarea${_attrs($textarea_input, "#textarea/1", $scope0_id, "textarea")}>${_attrs_textarea_value($scope0_id, "#textarea/1", $textarea_input)}</textarea>${_el_resume($scope0_id, "#textarea/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#4");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#select/0": ["...attrs", "2:12"],
		"EventAttributes:#select/0": ["...attrs", "2:12"],
		"ControlledHandler:#textarea/1": ["...attrs", "6:14"],
		"EventAttributes:#textarea/1": ["...attrs", "6:14"]
	});
}, 1);
