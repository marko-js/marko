// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_attr_select_value($scope0_id, "a", "b", void 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	});
}, 1);
