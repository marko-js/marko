// tags/baz.marko
var baz_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div></div>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	baz_default({});
	baz_default({});
}, 1);
