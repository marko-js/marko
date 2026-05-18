// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input.valueChange });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const setter = _resume(function() {}, "a0", $scope0_id);
	{
		const $scope1_id = _scope_id();
		child_default({ valueChange: _resume(function() {
			setter();
		}, "a1", $scope1_id) });
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	writeScope($scope0_id, { b: setter });
}, 1);
