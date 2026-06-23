// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = null;
	_html(`<input${_attr_input_checkedValue($scope0_id, "#input/0", selected, _resume((_new_selected) => {
		selected = _new_selected;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "")} type=checkbox>${_el_resume($scope0_id, "#input/0")}<output>${selected === undefined ? "undefined" : selected === null ? "null" : _escape("value=" + selected)}${_el_resume($scope0_id, "#text/1")}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
