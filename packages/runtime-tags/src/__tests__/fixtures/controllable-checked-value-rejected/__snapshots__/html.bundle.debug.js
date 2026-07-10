// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = "a";
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", picked, _resume(function() {}, "__tests__/template.marko_0/checkedValueChange"), "a")} type=radio name=pick>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", picked, _resume(function() {}, "__tests__/template.marko_0/checkedValueChange2"), "b")} type=radio name=pick>${_el_resume($scope0_id, "#input/1")}<span>${_escape(picked)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
