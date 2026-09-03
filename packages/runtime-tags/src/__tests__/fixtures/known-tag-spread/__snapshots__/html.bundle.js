// tags/child-a/index.marko
var child_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2), $sg__input_c = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $sg__input_a)} ${_text_resume($scope0_id, "b", input.b, $sg__input_b * 2)} ${_text_resume($scope0_id, "c", input.c, $sg__input_c * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-c/index.marko
var child_c_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $sg__input_a)} ${_text_resume($scope0_id, "b", input.b, $sg__input_b * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const extras = {
		b: 2,
		c: 3
	};
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	child_a_default({
		a: n,
		...extras
	});
	_set_serialize_reason(6);
	const $childScope2 = _peek_scope_id();
	child_a_default({
		...extras,
		a: n
	});
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1),
		2: _serialize_guard($scope0_reason, 2)
	});
	const $childScope3 = _peek_scope_id();
	child_c_default(input.settings);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: extras,
		j: n,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2),
		e: _serialize_if($scope0_reason, 0) && _existing_scope($childScope3)
	});
}, 1);
