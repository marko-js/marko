// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.n * 2 + input.n * 3)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_default({ n });
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: n,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
