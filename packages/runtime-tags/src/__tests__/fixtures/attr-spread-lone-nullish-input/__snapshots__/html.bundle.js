// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { attrs } = input;
	_html(`<input${_attrs(attrs, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
}, 1);
