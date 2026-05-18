// tags/parent-el.marko
var parent_el_default = _template("__tests__/tags/parent-el.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = undefined;
	_html(`<!--Body Text-->${_el_resume($scope0_id, "#comment/0")}`);
	const $return = tagName;
	_script($scope0_id, "__tests__/tags/parent-el.marko_0");
	writeScope($scope0_id, {}, "__tests__/tags/parent-el.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $childScope = _peek_scope_id();
	let divName = parent_el_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_divName/var");
	_html(`${_escape(divName)}${_el_resume($scope0_id, "#text/2")}</div><span>`);
	const $childScope2 = _peek_scope_id();
	let spanName = parent_el_default({});
	_var($scope0_id, "#scopeOffset/4", $childScope2, "__tests__/template.marko_0_spanName/var");
	_html(`${_escape(spanName)}${_el_resume($scope0_id, "#text/5")}</span>`);
	writeScope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
