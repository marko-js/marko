// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<input value=a><input${_attr_input_value($scope0_id, "#input/0", value)}>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", value, undefined)}>${_el_resume($scope0_id, "#input/1")}<button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
