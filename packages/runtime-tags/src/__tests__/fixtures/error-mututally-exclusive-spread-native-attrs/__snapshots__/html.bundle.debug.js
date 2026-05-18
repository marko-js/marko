// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...{
			checkedValue: 1,
			checkedChange: _resume(function() {}, "__tests__/template.marko_0/checkedChange")
		}
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
