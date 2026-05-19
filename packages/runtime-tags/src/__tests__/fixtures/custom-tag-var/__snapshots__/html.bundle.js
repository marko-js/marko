// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $return = x;
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: x });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let data = child_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<div>${_escape(data)}${_el_resume($scope0_id, "c")}</div>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
