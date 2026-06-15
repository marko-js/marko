// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "start";
	const $valueChange = _resume((_new_x) => {
		x = _new_x;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id);
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<input${_attr_input_value($scope0_id, "#input/2", x, $valueChange)}>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_value($scope0_id, "#input/3", x, $valueChange)}>${_el_resume($scope0_id, "#input/3")}<input${_attr_input_value($scope0_id, "#input/4", x, $valueChange)}>${_el_resume($scope0_id, "#input/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, {
		x,
		$valueChange
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		$valueChange: 0
	});
	_resume_branch($scope0_id);
}, 1);
