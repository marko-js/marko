// tags/baz.marko
var baz_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>baz</div>");
});

// tags/foo.marko
var foo_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>foo</div>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", baz_default, {}, 0, 0, 0);
	_resume_branch($scope0_id);
}, 1);
