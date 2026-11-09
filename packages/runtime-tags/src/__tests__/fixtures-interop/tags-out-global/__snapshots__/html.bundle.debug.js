// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const x = $global$1.x;
	_html(`<div><span>${_escape(x)}</span><span>${_escape($global$1.x)}</span></div>`);
}, 1);
