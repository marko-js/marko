// template.marko
const $template = "<p>static</p>";
const $walks = "b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko,<p>static</p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>static</p>");
}, 1);
