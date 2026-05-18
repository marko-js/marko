// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input${_attr_input_checked($scope0_id, "#input/0", checked, _resume((_new_checked) => {
		checked = _new_checked;
	}, "__tests__/template.marko_0/checkedChange", $scope0_id))} type=checkbox>${_el_resume($scope0_id, "#input/0")}<span>${_escape(String(checked))}${_el_resume($scope0_id, "#text/1")}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
