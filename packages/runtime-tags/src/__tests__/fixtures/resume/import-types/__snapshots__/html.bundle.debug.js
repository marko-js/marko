// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const foo = true;
	const bar = true;
	_html(`<div>${_escape(String(foo))}${_escape(String(bar))}</div>`);
}, 1);
