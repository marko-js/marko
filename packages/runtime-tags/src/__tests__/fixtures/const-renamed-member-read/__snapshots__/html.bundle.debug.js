// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = { n: 1 };
	const $x = { n: 2 };
	_html(`<div>${_escape(x.n)}</div><div>${_escape($x.n)}</div>`);
}, 1);
