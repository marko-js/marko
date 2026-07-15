// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { attrs } = input;
	_html(`<input${_attrs(attrs, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
