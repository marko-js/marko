// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = ["a", "z"];
	_attr_select_value($scope0_id, "a", picked, _resume((_new_picked) => {
		picked = _new_picked;
	}, "a0", $scope0_id), () => {
		_html(`<select multiple><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(_el_resume($scope0_id, "a"));
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
