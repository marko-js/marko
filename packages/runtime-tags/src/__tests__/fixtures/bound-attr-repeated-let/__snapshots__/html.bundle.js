// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "start";
	const $valueChange = _resume((_new_x) => {
		x = _new_x;
	}, "a0", $scope0_id);
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "c", x, $valueChange)}>${_el_resume($scope0_id, "c")}<input${_attr_input_value($scope0_id, "d", x, $valueChange)}>${_el_resume($scope0_id, "d")}<input${_attr_input_value($scope0_id, "e", x, $valueChange)}>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		f: x,
		g: $valueChange
	});
	_resume_branch($scope0_id);
}, 1);
