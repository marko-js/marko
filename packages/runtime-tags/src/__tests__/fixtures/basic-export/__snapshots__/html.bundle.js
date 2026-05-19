// exporter.marko
var exporter_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape(123)}</div>`);
}, 1);
