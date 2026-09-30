// tags/heading.marko
var heading_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputtype_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<span>body</span>");
	}, $scope0_id));
	_var($scope0_id, "b", $inputtype_scope, "b1");
	_script($scope0_id, "b2");
	_scope($scope0_id, { f: el });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({ type: "h1" });
}, 1);
