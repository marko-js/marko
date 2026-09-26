// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { attrs } = input;
	const $select_input = attrs;
	_attrs_select_value($scope0_id, "a", $select_input, () => {
		_html(`<select${_attrs($select_input, "a", $scope0_id, "select")}><option${_attr_option_value("one")}>one</option><option${_attr_option_value("")}>empty</option></select>`);
	});
	const $textarea_input = attrs;
	_html(`${_el_resume($scope0_id, "a")}<textarea${_attrs($textarea_input, "b", $scope0_id, "textarea")}>${_attrs_textarea_value($scope0_id, "b", $textarea_input)}</textarea>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
