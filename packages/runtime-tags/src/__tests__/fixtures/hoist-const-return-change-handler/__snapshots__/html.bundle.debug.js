// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Counter = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $Counter_content__setCount_getter = _hoist($scope1_id, "__tests__/template.marko_1_setCount#1/hoist");
		_scope_reason();
		let count = 0;
		const $return = count;
		const setCount = _resume((value) => {
			count = value;
		}, "__tests__/template.marko_1/setCount", $scope1_id);
		_scope($scope1_id, {
			setCount,
			"#TagVariableChange": $Counter_content__setCount_getter || void 0
		}, "__tests__/template.marko", "1:2", { setCount: "4:10" });
		_resume_branch($scope1_id);
		_assert_hoist(setCount);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let c = Counter.content({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_c#4/var");
	_html(`<button>${_text_mark($scope0_id, "#text/3", c)}</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		c,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { c: "6:10" });
}, 1);
