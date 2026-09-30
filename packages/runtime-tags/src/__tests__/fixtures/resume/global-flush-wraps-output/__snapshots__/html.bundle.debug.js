// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const _ = $global$1.__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
	_html("<h1>Hello World</h1>");
}, 1);
