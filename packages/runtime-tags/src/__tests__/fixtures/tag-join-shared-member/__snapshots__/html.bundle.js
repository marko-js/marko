// tags/rows.marko
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_d = _write_guard($scope0_reason, 2), $wg__input_a__OR__input_b__OR__input_c = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a + input.b + input.c, $wg__input_a__OR__input_b__OR__input_c)}</div><div>${_text_resume($scope0_id, "b", input.a + input.d, $wg__input_a__OR__input_d)}</div>`);
	_write_if($scope0_reason, 5) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 4) && input.a,
		f: _write_if($scope0_reason, 1) && input.b,
		g: _write_if($scope0_reason, 0) && input.c,
		i: _write_if($scope0_reason, 6) && input.d
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2690 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 2) << 13));
	const $childScope = _peek_scope_id();
	rows_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: b,
		b: _existing_scope($childScope)
	});
}, 1);
