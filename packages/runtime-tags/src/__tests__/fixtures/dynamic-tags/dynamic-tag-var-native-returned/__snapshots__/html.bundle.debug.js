// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputas_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", input.as, {}, _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("child body");
	}, $scope0_id));
	_var($scope0_id, "#scopeOffset/1", $inputas_scope, "__tests__/tags/child.marko_0_el#5/var");
	const $return = el;
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = child_default({ as: "section" });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#2/var");
	_script($scope0_id, "__tests__/template.marko_0_v#2");
	_scope($scope0_id, {
		v,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { v: "2:8" });
}, 1);
