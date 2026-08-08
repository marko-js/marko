// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $valueChange2 = _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id);
	const $valueChange = _resume((_new_value) => {
		value = parseInt(_new_value);
	}, "a1", $scope0_id);
	_html(`<input${_attr_input_value($scope0_id, "a", value, $valueChange)} id=refined>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", value, $valueChange)} id=refined2>${_el_resume($scope0_id, "b")}<input${_attr_input_value($scope0_id, "c", value, $valueChange2)} id=plain>${_el_resume($scope0_id, "c")}<input${_attr_input_value($scope0_id, "d", value, $valueChange2)} id=plain2>${_el_resume($scope0_id, "d")}<div>${_escape(typeof value)}${_el_resume($scope0_id, "e")} <!>${_escape(value)}${_el_resume($scope0_id, "f")}</div>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		h: $valueChange2,
		j: $valueChange
	});
	_resume_branch($scope0_id);
}, 1);
