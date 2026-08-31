// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return "foo";
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_content("a0", (input) => {
		_scope_id();
		_scope_reason();
		return input.value;
	}, $scope0_id);
	let open = false;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: open });
	_resume_branch($scope0_id);
}, 1);
