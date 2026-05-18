// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	_attr_select_value($scope0_id, "a", value, _resume(function(v) {
		value = v;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "a")}<span>${_escape(value)}${_el_resume($scope0_id, "b")}</span>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
