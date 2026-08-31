// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = undefined;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", v, undefined)} type=hidden>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
