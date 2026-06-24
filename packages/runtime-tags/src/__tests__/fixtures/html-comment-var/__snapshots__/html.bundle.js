// tags/parent-el.marko
var parent_el_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!--Body Text-->${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $childScope = _peek_scope_id();
	let divName = parent_el_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`${_escape(divName)}${_el_resume($scope0_id, "c")}</div><span>`);
	const $childScope2 = _peek_scope_id();
	let spanName = parent_el_default({});
	_var($scope0_id, "e", $childScope2, "a1");
	_html(`${_escape(spanName)}${_el_resume($scope0_id, "f")}</span>`);
	writeScope($scope0_id, {
		a: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
