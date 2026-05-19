// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<input value=a><input${_attr_input_value($scope0_id, "a", value)}>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", value, void 0)}>${_el_resume($scope0_id, "b")}<button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
