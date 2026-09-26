// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = input.rest;
	_attrs_select_value($scope0_id, "#select/0", $select_input, () => {
		_html(`<select${_attrs($select_input, "#select/0", $scope0_id, "select")}><option${_attr_option_value("one")}>one</option><option${_attr_option_value("")}>empty</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/0"));
	_script($scope0_id, "__tests__/template.marko_0_input_rest#3");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#select/0": ["...input.rest", "1:12"],
		"EventAttributes:#select/0": ["...input.rest", "1:12"]
	});
}, 1);
