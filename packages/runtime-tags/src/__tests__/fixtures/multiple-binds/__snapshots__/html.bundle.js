// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $valueChange = _resume((_new_count) => {
		count = _new_count;
	}, "a0", $scope0_id);
	_html(`<button><input${_attr_input_value($scope0_id, "b", count, $valueChange)}>${_el_resume($scope0_id, "b")}<input${_attr_input_value($scope0_id, "c", count, $valueChange)}>${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: count,
		e: $valueChange
	});
	_resume_branch($scope0_id);
}, 1);
