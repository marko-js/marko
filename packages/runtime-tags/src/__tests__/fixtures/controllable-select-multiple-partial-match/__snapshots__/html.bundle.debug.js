// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = ["a", "z"];
	_attr_select_value($scope0_id, "#select/0", picked, _resume((_new_picked) => {
		picked = _new_picked;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select multiple><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/0"));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#select/0": ["valueChange"] });
}, 1);
