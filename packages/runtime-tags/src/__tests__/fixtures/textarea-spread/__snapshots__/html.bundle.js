// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $textarea_input = input;
	_html(`<textarea${_attrs($textarea_input, "a", $scope0_id, "textarea")}>${_attrs_textarea_value($scope0_id, "a", $textarea_input)}</textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
