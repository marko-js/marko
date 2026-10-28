// tags/code-block.marko
var code_block_default = _template("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b__OR__input_c__OR__input_d = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const f = _resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "__tests__/tags/code-block.marko_0/f", $scope0_id);
	_html(`<div>${_text_resume($scope0_id, "#text/0", f(input.d), $wg__input_a__OR__input_b__OR__input_c__OR__input_d)}</div>`);
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		input_a: _write_if($scope0_reason, 3) && input.a,
		input_b: _write_if($scope0_reason, 2) && input.b,
		input_c: _write_if($scope0_reason, 1) && input.c,
		input_d: _write_if($scope0_reason, 0) && input.d,
		f: _write_if($scope0_reason, 5) && f
	}, "__tests__/tags/code-block.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"],
		f: "1:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(650 | (_write_guard($scope0_reason, 0) << 5 | _write_guard($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id();
	code_block_default({
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
