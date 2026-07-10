// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = "a";
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", picked, _resume(function() {}, "a0"), "a")} type=radio name=pick>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", picked, _resume(function() {}, "a1"), "b")} type=radio name=pick>${_el_resume($scope0_id, "b")}<span>${_escape(picked)}</span>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
