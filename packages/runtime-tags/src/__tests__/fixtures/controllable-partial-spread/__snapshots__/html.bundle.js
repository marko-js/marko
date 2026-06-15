// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	const rest = { placeholder: "p" };
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<input${_attrs({
		checkedValue: v,
		...rest
	}, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<input${_attrs({
		...rest,
		checkedValue: v
	}, "c", $scope0_id, "input")}>${_el_resume($scope0_id, "c")}<input${_attr_input_value($scope0_id, "d", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id))}${_attrs_partial(rest, {
		value: 1,
		valueChange: 1
	}, "d", $scope0_id, "input")}>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		e: v,
		f: rest
	});
	_resume_branch($scope0_id);
}, 1);
