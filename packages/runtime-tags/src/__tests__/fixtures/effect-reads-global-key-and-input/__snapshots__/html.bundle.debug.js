// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_page#3");
	_scope($scope0_id, { input_page: input.page }, "__tests__/template.marko", 0, { input_page: ["input.page"] });
}, 1);
