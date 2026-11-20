// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	const Double = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = count * 2;
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_count#0:5/subscribe", 0);
		_resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let doubled = Double.content({});
	_var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_doubled#6/var");
	_if(() => {
		if (count) {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "#text/0", doubled)}</em>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
