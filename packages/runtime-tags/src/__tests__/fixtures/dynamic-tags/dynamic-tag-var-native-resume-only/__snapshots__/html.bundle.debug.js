// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputtype_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<span>body</span>");
	}, $scope0_id));
	_var($scope0_id, "#scopeOffset/1", $inputtype_scope, "__tests__/tags/heading.marko_0_el#5/var");
	_script($scope0_id, "__tests__/tags/heading.marko_0_el#5");
	_scope($scope0_id, { el }, "__tests__/tags/heading.marko", 0, { el: "1:16" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({ type: "h1" });
}, 1);
