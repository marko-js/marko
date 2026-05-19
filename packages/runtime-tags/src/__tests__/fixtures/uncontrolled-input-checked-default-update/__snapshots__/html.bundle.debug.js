// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input type=checkbox><input${_attr_input_checked($scope0_id, "#input/0", checked)} type=checkbox>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checked($scope0_id, "#input/1", checked, undefined)} type=checkbox>${_el_resume($scope0_id, "#input/1")}<button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
