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
	const $el_getter = _hoist($scope0_id, "a0");
	child_default({ value: $el_getter });
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	child_default({ value: $el_getter });
	writeScope($scope0_id, {});
}, 1);
