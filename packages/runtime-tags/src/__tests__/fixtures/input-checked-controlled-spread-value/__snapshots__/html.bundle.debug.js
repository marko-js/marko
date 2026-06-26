// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input${_attrs({
		type: "radio",
		checked,
		checkedChange: _resume((_new_checked) => {
			checked = _new_checked;
		}, "__tests__/template.marko_0/checkedChange", $scope0_id),
		value: "x",
		...input.rest
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_rest_checked");
	writeScope($scope0_id, {
		input_rest: input.rest,
		checked
	}, "__tests__/template.marko", 0, {
		input_rest: ["input.rest"],
		checked: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
