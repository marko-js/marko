// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input type=checkbox><input${_attr_input_checked($scope0_id, "a", checked)} type=checkbox>${_el_resume($scope0_id, "a")}<input${_attr_input_checked($scope0_id, "b", checked, void 0)} type=checkbox>${_el_resume($scope0_id, "b")}<button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
