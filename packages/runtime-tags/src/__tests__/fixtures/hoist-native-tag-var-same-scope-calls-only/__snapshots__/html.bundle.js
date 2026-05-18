// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0");
	writeScope($scope0_id, { b: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ action: _resume(function() {
		(($el) => $el())(_el_read_error).classList.add("child1");
	}, "a0", $scope0_id) });
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	child_default({ action: _resume(function() {
		(($el) => $el())(_el_read_error).classList.add("child2");
	}, "a1", $scope0_id) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
}, 1);
