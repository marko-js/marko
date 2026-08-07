// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input${_attr_input_checked($scope0_id, "#input/0", checked, _resume(function(v) {
		checked = v;
	}, "__tests__/template.marko_0/checkedChange", $scope0_id))}${_attrs_partial(input.attrs, {
		checked: 1,
		checkedChange: 1
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { input_attrs: input.attrs }, "__tests__/template.marko", 0, { input_attrs: ["input.attrs"] });
	_resume_branch($scope0_id);
}, 1);
