// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $valueChange = _resume((_new_count) => {
		count = _new_count;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id);
	_html(`<button><input${_attr_input_value($scope0_id, "#input/1", count, $valueChange)}>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_value($scope0_id, "#input/2", count, $valueChange)}>${_el_resume($scope0_id, "#input/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		$valueChange
	}, "__tests__/template.marko", 0, {
		count: "1:5",
		$valueChange: 0
	});
	_resume_branch($scope0_id);
}, 1);
