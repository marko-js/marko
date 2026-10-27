// tags/code-block.marko
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b__OR__input_c__OR__input_d = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const f = _resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "b0", $scope0_id);
	_html(`<div>${_text_resume($scope0_id, "a", f(input.d), $wg__input_a__OR__input_b__OR__input_c__OR__input_d)}</div>`);
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 3) && input.a,
		e: _write_if($scope0_reason, 2) && input.b,
		f: _write_if($scope0_reason, 1) && input.c,
		h: _write_if($scope0_reason, 0) && input.d,
		i: _write_if($scope0_reason, 5) && f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(650 | (_write_guard($scope0_reason, 0) << 5 | _write_guard($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id();
	code_block_default({
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
