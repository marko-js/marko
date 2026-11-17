// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.a0, _write_guard($scope0_reason, 1))}</p><p>${_text_mark($scope0_id, "b", input.a1, _write_guard($scope0_reason, 2))}</p><p>${_text_mark($scope0_id, "c", input.a2, _write_guard($scope0_reason, 3))}</p><p>${_text_mark($scope0_id, "d", input.a3, _write_guard($scope0_reason, 4))}</p><p>${_text_mark($scope0_id, "e", input.a4, _write_guard($scope0_reason, 5))}</p><p>${_text_mark($scope0_id, "f", input.a5, _write_guard($scope0_reason, 6))}</p><p>${_text_mark($scope0_id, "g", input.a6, _write_guard($scope0_reason, 7))}</p><p>${_text_mark($scope0_id, "h", input.a7, _write_guard($scope0_reason, 8))}</p><p>${_text_mark($scope0_id, "i", input.a8, _write_guard($scope0_reason, 9))}</p><p>${_text_mark($scope0_id, "j", input.a9, _write_guard($scope0_reason, 10))}</p><p>${_text_mark($scope0_id, "k", input.a10, _write_guard($scope0_reason, 11))}</p><p>${_text_mark($scope0_id, "l", input.a11, _write_guard($scope0_reason, 12))}</p><p>${_text_mark($scope0_id, "m", input.a12, _write_guard($scope0_reason, 13))}</p><p>${_text_mark($scope0_id, "n", input.a13, _write_guard($scope0_reason, 14))}</p><p>${_text_mark($scope0_id, "o", input.a14, _write_guard($scope0_reason, 15))}</p><p>${_text_mark($scope0_id, "p", input.a15, _write_guard($scope0_reason, 16))}</p><p>${_text_mark($scope0_id, "q", input.a16, _write_guard($scope0_reason, 17))}</p>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_set_scope_reason(715827882);
	const $childScope = _peek_scope_id();
	child_default({
		a0: x,
		a1: x,
		a2: x,
		a3: x,
		a4: x,
		a5: x,
		a6: x,
		a7: x,
		a8: x,
		a9: x,
		a10: x,
		a11: x,
		a12: x,
		a13: x,
		a14: 14,
		a15: 15,
		a16: 16
	});
	_html(`<button id=inc>${_text_mark($scope0_id, "c", x)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
}, 1);
