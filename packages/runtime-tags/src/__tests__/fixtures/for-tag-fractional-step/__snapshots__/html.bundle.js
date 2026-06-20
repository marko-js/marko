// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<ul>");
	forTo(.3, 0, .1, (i) => {
		_scope_id();
		_html(`<li>to: ${_escape(i.toFixed(1))}</li>`);
	});
	forUntil(2.1, 0, .15, (i) => {
		_scope_id();
		_html(`<li>until: ${_escape(i.toFixed(2))}</li>`);
	});
	_html("</ul>");
}, 1);
