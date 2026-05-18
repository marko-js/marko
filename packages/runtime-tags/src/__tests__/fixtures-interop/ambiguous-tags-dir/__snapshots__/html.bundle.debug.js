// tags/hello.marko
var hello_default = _template("__tests__/tags/hello.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>Hello world</h1>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	hello_default({});
}, 1);
