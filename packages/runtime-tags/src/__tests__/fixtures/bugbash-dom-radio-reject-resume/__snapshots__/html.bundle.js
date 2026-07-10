// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let sel = "a";
	_html(`<form><input${_attr_input_checkedValue($scope0_id, "a", sel, _resume(function(v) {}, "a0"), "a")} type=radio name=g>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", sel, _resume(function(v) {}, "a1"), "b")} type=radio name=g>${_el_resume($scope0_id, "b")}</form><span>sel:${_escape(sel)}</span>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
