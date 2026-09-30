// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const $global$1 = $global();
	$global$1.__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
	_html("<h1>Hello World</h1>");
}, 1);
