// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = [1];
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), 0)} type=checkbox>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "1")} type=checkbox>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_checkedValue($scope0_id, "#input/2", checked, _resume(function(v) {
		checked = v.map((it) => Number(it));
	}, "__tests__/template.marko_0/checkedValueChange3", $scope0_id), 2)} type=checkbox>${_el_resume($scope0_id, "#input/2")}<span>${_escape(checked)}${_el_resume($scope0_id, "#text/3")}</span><button>Reset</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
