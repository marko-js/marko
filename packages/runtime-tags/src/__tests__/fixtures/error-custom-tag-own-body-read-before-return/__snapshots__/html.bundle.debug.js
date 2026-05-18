// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputcontent_scope = _peek_scope_id();
	let r = _dynamic_tag($scope0_id, "#text/0", input.content, {});
	_var($scope0_id, "#scopeOffset/1", $inputcontent_scope, "__tests__/tags/child.marko_0_r/var");
	const $return = r;
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	const $childScope = _peek_scope_id();
	let x = child_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(x)}${_el_resume($scope1_id, "#text/0")}</span>`);
		const $return = 1;
		_subscribe($x__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
		_resume_branch($scope1_id);
		return $return;
	}) });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_x/var");
	_html(`<div>${_escape(x)}${_el_resume($scope0_id, "#text/2")}</div>`);
	writeScope($scope0_id, {
		"ClosureScopes:x": $x__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
