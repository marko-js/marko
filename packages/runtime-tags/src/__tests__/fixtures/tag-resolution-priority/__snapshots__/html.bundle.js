// tags/foo.marko
var foo_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span></span>");
});

// template.marko
const Bar = "div";
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div></div>");
	foo_default({});
	_dynamic_tag($scope0_id, "b", Bar, {}, 0, 0, 0);
}, 1);
