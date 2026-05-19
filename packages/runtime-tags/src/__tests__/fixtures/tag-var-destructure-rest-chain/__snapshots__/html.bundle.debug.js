// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { a, ...rest } = {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	};
	const { b, ...rest2 } = rest;
	const { c, ...rest3 } = rest2;
	_html(`<div class=abc>${_escape(a)} ${_escape(b)} ${_escape(c)}</div><div class=rest>${_escape(JSON.stringify(rest))}</div><div class=rest2>${_escape(JSON.stringify(rest2))}</div><div class=rest3>${_escape(JSON.stringify(rest3))}</div>`);
}, 1);
