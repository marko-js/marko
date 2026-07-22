// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_attr_select_value($scope0_id, "#select/0", input.sel, void 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("")}>None</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/0", _serialize_guard($scope0_reason, 0)));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
