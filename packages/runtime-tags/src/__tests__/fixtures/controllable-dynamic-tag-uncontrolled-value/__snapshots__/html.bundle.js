// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const tag = "select";
	_dynamic_tag($scope0_id, "a", tag, { value: "b" }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
	}, $scope0_id));
	_html(`<button>pick c</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: tag });
	_resume_branch($scope0_id);
}, 1);
