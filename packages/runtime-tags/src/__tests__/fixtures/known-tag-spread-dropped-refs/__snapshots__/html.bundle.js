// tags/child-b/index.marko
var child_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $sg__input_a)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const j1 = { a: 5 };
	const j2 = { a: 6 };
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	child_b_default({
		...j1,
		...j2,
		a: n
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
}, 1);
