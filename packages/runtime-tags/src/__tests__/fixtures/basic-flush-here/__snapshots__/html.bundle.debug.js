// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const _ = $global().__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
	_html("<h1>Hello World</h1>");
}, 1);
