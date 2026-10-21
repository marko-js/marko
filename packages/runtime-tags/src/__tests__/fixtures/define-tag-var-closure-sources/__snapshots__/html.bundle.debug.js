// tags/sum-with.marko
var sum_with_default = _template("__tests__/tags/sum-with.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 0), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const Sum = { content: _content("__tests__/tags/sum-with.marko_1*content", ({ a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__a = _write_if($scope1_reason, 0);
		const $return = a + input.n;
		($wi__input_n || $wi__a) && _subscribe($wi__input_n && $input_n__closures, _scope($scope1_id, {
			a: $wi__input_n && a,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/sum-with.marko", "1:2", { a: "1:15" }), "__tests__/tags/sum-with.marko_1_input_n#0:5/subscribe", 0);
		($wi__input_n || $wi__a) && _resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let x = Sum.content({ a: 1 });
	$wi__input_n && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/sum-with.marko_0_x#6/var");
	_html(`<div>${_text_resume($scope0_id, "#text/2", x, $wg__input_n)}</div>`);
	$wi__input_n && _scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/7": $wi__input_n && $input_n__closures,
		"#childScope/0": $wi__input_n && _existing_scope($childScope)
	}, "__tests__/tags/sum-with.marko", 0, { input_n: ["input.n"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	sum_with_default({ n });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
