// tags/my-const.marko
var my_const_default = _template("__tests__/tags/my-const.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.value;
	return $return;
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let x = my_const_default({ value: input.foo });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/child.marko_0_x/var");
	_script($scope0_id, "__tests__/tags/child.marko_0_input_x");
	writeScope($scope0_id, {
		input,
		x,
		"#childScope/0": _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, {
		input: 0,
		x: "1:10"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const output = _el($scope0_id, "__tests__/template.marko_0_#div");
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	child_default({
		foo: input.foo,
		output
	});
	writeScope($scope0_id, { "#childScope/1": _serialize_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
