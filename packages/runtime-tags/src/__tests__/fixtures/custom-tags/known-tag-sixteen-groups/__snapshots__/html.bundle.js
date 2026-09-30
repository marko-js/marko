// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a15__OR__input_a = _serialize_guard($scope0_reason, 0), $sg__input_a = _serialize_guard($scope0_reason, 2), $sg__input_a2 = _serialize_guard($scope0_reason, 3), $sg__input_a3 = _serialize_guard($scope0_reason, 4), $sg__input_a4 = _serialize_guard($scope0_reason, 5), $sg__input_a5 = _serialize_guard($scope0_reason, 6), $sg__input_a6 = _serialize_guard($scope0_reason, 7), $sg__input_a7 = _serialize_guard($scope0_reason, 8), $sg__input_a8 = _serialize_guard($scope0_reason, 9), $sg__input_a9 = _serialize_guard($scope0_reason, 10), $sg__input_a10 = _serialize_guard($scope0_reason, 11), $sg__input_a11 = _serialize_guard($scope0_reason, 12), $sg__input_a12 = _serialize_guard($scope0_reason, 13), $sg__input_a13 = _serialize_guard($scope0_reason, 14), $sg__input_a14 = _serialize_guard($scope0_reason, 15), $sg__input_a15 = _serialize_guard($scope0_reason, 16), $sg__input_a16 = _serialize_guard($scope0_reason, 17), $sg__input_a17 = _serialize_guard($scope0_reason, 18);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.a0, $sg__input_a)}</p><p>${_text_resume($scope0_id, "b", input.a1, $sg__input_a2)}</p><p>${_text_resume($scope0_id, "c", input.a2, $sg__input_a3)}</p><p>${_text_resume($scope0_id, "d", input.a3, $sg__input_a4)}</p><p>${_text_resume($scope0_id, "e", input.a4, $sg__input_a5)}</p><p>${_text_resume($scope0_id, "f", input.a5, $sg__input_a6)}</p><p>${_text_resume($scope0_id, "g", input.a6, $sg__input_a7)}</p><p>${_text_resume($scope0_id, "h", input.a7, $sg__input_a8)}</p><p>${_text_resume($scope0_id, "i", input.a8, $sg__input_a9)}</p><p>${_text_resume($scope0_id, "j", input.a9, $sg__input_a10)}</p><p>${_text_resume($scope0_id, "k", input.a10, $sg__input_a11)}</p><p>${_text_resume($scope0_id, "l", input.a11, $sg__input_a12)}</p><p>${_text_resume($scope0_id, "m", input.a12, $sg__input_a13)}</p><p>${_text_resume($scope0_id, "n", input.a13, $sg__input_a14)}</p><p>${_text_resume($scope0_id, "o", input.a14, $sg__input_a15)}</p><p>${_text_resume($scope0_id, "p", input.a15, $sg__input_a16)}</p><p>${_text_resume($scope0_id, "q", input.a16, $sg__input_a17)}</p><p>${_text_resume($scope0_id, "r", input.a15 + input.a16, $sg__input_a15__OR__input_a)}</p>`);
	_serialize_if($scope0_reason, 1) && _scope($scope0_id, {
		a9: _serialize_if($scope0_reason, 18) && input.a15,
		aa: _serialize_if($scope0_reason, 17) && input.a16
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_set_serialize_reason(40);
	const $childScope = _peek_scope_id();
	child_default({
		a0: x,
		a1: 1,
		a2: 2,
		a3: 3,
		a4: 4,
		a5: 5,
		a6: 6,
		a7: 7,
		a8: 8,
		a9: 9,
		a10: 10,
		a11: 11,
		a12: 12,
		a13: 13,
		a14: 14,
		a15: 15,
		a16: 16
	});
	_html(`<button id=inc>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
}, 1);
