// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forTo(.3, 0, .1, (n) => {
		_scope_id();
		_html(`<div>${_escape(n)}</div>`);
	});
	forUntil(5.1, 0, 1.7, (n) => {
		_scope_id();
		_html(`<span>${_escape(n)}</span>`);
	});
}, 1);
