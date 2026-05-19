// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = [1];
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "a0", $scope0_id), 0)} type=checkbox>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "a1", $scope0_id), "1")} type=checkbox>${_el_resume($scope0_id, "b")}<input${_attr_input_checkedValue($scope0_id, "c", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "a2", $scope0_id), 2)} type=checkbox>${_el_resume($scope0_id, "c")}<span>${_escape(checked)}${_el_resume($scope0_id, "d")}</span><button>Reset</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
