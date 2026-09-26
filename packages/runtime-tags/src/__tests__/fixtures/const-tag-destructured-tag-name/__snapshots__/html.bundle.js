// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { layout: Layout } = child_default;
	_dynamic_tag($scope0_id, "a", Layout, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("no layout");
	}, $scope0_id), 0, 0);
}, 1);
