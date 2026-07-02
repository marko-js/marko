// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	const rest = { placeholder: "p" };
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<input${_attrs({
		checkedValue: v,
		...rest
	}, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<input${_attrs({
		...rest,
		checkedValue: v
	}, "#input/2", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_value($scope0_id, "#input/3", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}${_attrs_partial(rest, {
		value: 1,
		valueChange: 1
	}, "#input/3", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_rest");
	_script($scope0_id, "__tests__/template.marko_0_v_rest");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		v,
		rest
	}, "__tests__/template.marko", 0, {
		v: "1:6",
		rest: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
