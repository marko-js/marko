// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!--${_escape_comment(input.text)}-->${_el_resume($scope0_id, "#comment/0")}<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
