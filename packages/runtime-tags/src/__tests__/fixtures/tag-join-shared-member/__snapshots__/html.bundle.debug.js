// tags/rows.marko
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_d = _write_guard($scope0_reason, 2), $wg__input_a__OR__input_b__OR__input_c = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a + input.b + input.c, $wg__input_a__OR__input_b__OR__input_c)}</div><div>${_text_resume($scope0_id, "#text/1", input.a + input.d, $wg__input_a__OR__input_d)}</div>`);
	_write_if($scope0_reason, 5) && _scope($scope0_id, {
		input_a: _write_if($scope0_reason, 4) && input.a,
		input_b: _write_if($scope0_reason, 1) && input.b,
		input_c: _write_if($scope0_reason, 0) && input.c,
		input_d: _write_if($scope0_reason, 6) && input.d
	}, "__tests__/tags/rows.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2690 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 2) << 13));
	const $childScope = _peek_scope_id();
	rows_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { b: "1:6" });
}, 1);
