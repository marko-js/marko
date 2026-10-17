// template.marko
const $template = "<h1>Hello</h1>";
const $walks = "b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global#2,<h1>Hello</h1>" });
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<h1>Hello</h1>");
	_fill_global_subscribe("__tests__/template.marko_0_$global#2", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0_$global#2", 0);
}, 1);
