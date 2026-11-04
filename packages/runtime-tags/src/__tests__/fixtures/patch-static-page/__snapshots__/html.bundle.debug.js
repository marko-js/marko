// template.marko
const $template = "<h1>Hello</h1>";
const $walks = "b";
const $setup = [[], ["__tests__/template.marko_0_$global#2"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global#2,<h1>Hello</h1>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<h1>Hello</h1>");
	_script($scope0_id, "__tests__/template.marko_0_$global#2", 0);
}, 1);
