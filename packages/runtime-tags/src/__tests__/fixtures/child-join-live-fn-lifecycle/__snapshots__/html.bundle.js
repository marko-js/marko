// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fmt = _resume(() => input.a + "!", "b0", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "a", fmt() + input.b, $wg__input_a__OR__input_b)}</p>`);
	_script($scope0_id, "b1", $wg__input_a__OR__input_b);
	_scope($scope0_id, {
		d: input.a,
		e: input.b,
		f: fmt
	});
	$wg__input_a__OR__input_b || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({
		a: input.a,
		b: n
	});
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id();
	child_default({
		a: input.a,
		b: input.b
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _write_if($scope0_reason, 0) && _existing_scope($childScope2)
	});
}, 1);
