// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fmt = _resume(() => input.a + "!", "__tests__/tags/child.marko_0/fmt", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "#text/0", fmt() + input.b, $wg__input_a__OR__input_b)}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_b#4_fmt#5", $wg__input_a__OR__input_b);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		fmt
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		fmt: "1:8"
	});
	$wg__input_a__OR__input_b || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _write_if($scope0_reason, 0) && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
