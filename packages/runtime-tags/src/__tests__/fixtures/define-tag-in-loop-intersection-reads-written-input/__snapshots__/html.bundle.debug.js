// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	let v = 0;
	const D = { content: _content("__tests__/template.marko_1*content", ({ q }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_mark($scope1_id, "#text/0", input.p1 + q, 2));
		_subscribe($wi__input_p && $input_p__closures, _scope($scope1_id, {
			q: $wi__input_p && q,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { q: "2:13" }), "__tests__/template.marko_1_input_p1#0:3/subscribe");
	}, $scope0_id) };
	_for_of([1, 2], (i) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		D.content({ q: v + i });
		_scope($scope2_id, {
			i,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "5:2", { i: "5:6" });
	}, 0, $scope0_id, "#text/0", 1, 0);
	_script($scope0_id, "__tests__/template.marko_0_input_p1#3", 0);
	_scope($scope0_id, {
		input_p1: input.p1,
		"ClosureScopes:input_p1/5": $wi__input_p && $input_p__closures
	}, "__tests__/template.marko", 0, { input_p1: ["input.p1"] });
	_resume_branch($scope0_id);
}, 1);
