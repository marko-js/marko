// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = void 0;
	_html(`<input${_attr_input_value($scope0_id, "a", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id))} type=checkbox>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
