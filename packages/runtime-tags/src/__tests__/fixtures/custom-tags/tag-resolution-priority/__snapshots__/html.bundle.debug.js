// tags/foo.marko
var foo_default = _template("__tests__/tags/foo.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span></span>");
});

// template.marko
const div = "span";
const foo = "div";
const Bar = "div";
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div></div>");
	foo_default({});
	_dynamic_tag($scope0_id, "#text/1", Bar, {}, 0, 0, 0);
}, 1);
