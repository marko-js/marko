// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr("disabled", input.act.pending)}>go</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.act });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const act = _action($scope0_id, "a1");
	const $childScope = _peek_scope_id();
	child_default({ act });
	_scope($scope0_id, {
		c: _resume(async () => {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}, "a0") || void 0,
		a: _existing_scope($childScope)
	});
}, 1);
