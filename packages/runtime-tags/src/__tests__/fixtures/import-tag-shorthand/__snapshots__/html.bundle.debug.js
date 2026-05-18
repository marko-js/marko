// tags/baz.marko
var baz_default = _template("__tests__/tags/baz.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div></div>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	baz_default({});
	baz_default({});
}, 1);
