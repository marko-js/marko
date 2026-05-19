// tags/hello.marko
var hello_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>Hello world</h1>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	hello_default({});
}, 1);
