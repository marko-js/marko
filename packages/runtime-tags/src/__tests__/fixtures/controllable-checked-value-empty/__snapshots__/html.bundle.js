// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = null;
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", selected, _resume((_new_selected) => {
		selected = _new_selected;
	}, "a0", $scope0_id), "")} type=checkbox>${_el_resume($scope0_id, "a")}<output>${_escape(selected === void 0 ? "undefined" : selected === null ? "null" : "value=" + selected)}${_el_resume($scope0_id, "b")}</output>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
