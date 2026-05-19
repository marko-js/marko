// tags/baz.marko
var baz_default = _template("__tests__/tags/baz.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>baz</div>");
});

// tags/foo.marko
var foo_default = _template("__tests__/tags/foo.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>foo</div>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_dynamic_tag($scope0_id, "#text/0", x === 1 ? baz_default : foo_default, {}, 0, 0, 0);
	_resume_branch($scope0_id);
}, 1);
