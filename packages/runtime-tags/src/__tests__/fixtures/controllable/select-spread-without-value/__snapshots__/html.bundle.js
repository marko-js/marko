// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = input.rest;
	_attrs_select_value($scope0_id, "a", $select_input, () => {
		_html(`<select${_attrs($select_input, "a", $scope0_id, "select")}><option${_attr_option_value("one")}>one</option><option${_attr_option_value("")}>empty</option></select>`);
	});
	_html(_el_resume($scope0_id, "a"));
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
