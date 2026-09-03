// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_first = _serialize_guard($scope0_reason, 1), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { first, ...rest } = input;
	_html(`<div>${_text_resume($scope0_id, "a", first, $sg__input_first)}:${_text_resume($scope0_id, "b", Object.keys(rest).join(","), $sg__rest * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	child_default({
		first: n,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
}, 1);
