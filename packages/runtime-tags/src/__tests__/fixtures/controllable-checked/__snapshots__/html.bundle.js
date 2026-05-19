// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input${_attr_input_checked($scope0_id, "a", checked, _resume((_new_checked) => {
		checked = _new_checked;
	}, "a0", $scope0_id))} type=checkbox>${_el_resume($scope0_id, "a")}<span>${_escape(String(checked))}${_el_resume($scope0_id, "b")}</span>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
