// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	_html(`<select id=uncontrolled><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	_attr_select_value($scope0_id, "a", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id), () => {
		_html(`<select id=controlled><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "a")}<div>${_escape(value)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
