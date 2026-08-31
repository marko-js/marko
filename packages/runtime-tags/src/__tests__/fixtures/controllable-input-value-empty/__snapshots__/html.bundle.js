// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = void 0;
	_html(`<input${_attr_input_value($scope0_id, "a", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "a")}${_escape(value) || "<!>"}${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
