// tags/my-const.marko
var my_const_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.value;
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let x = my_const_default({ value: input.foo });
	_var($scope0_id, "b", $childScope, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		d: input,
		f: x,
		a: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const output = _el($scope0_id, "a0");
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	child_default({
		foo: input.foo,
		output
	});
	writeScope($scope0_id, { b: _serialize_if($scope0_reason, 0) && _existing_scope($childScope) });
}, 1);
