// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, {
		c: input.value,
		d: input.valueChange
	});
});

// tags/counter.marko
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $childScope = _peek_scope_id();
	child_default({
		value: count,
		valueChange: _resume((_new_count) => count = _new_count, "c0", $scope0_id)
	});
	_scope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			counter_default({});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>hide</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
