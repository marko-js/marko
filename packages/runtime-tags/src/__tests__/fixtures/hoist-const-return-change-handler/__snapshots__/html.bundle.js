// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Counter = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		const $Counter_content__setCount_getter = _hoist($scope1_id, "a1");
		_scope_reason();
		let count = 0;
		const $return = count;
		const setCount = _resume((value) => {
			count = value;
		}, "a0", $scope1_id);
		_scope($scope1_id, {
			b: setCount,
			U: $Counter_content__setCount_getter || void 0
		});
		_resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let c = Counter.content({});
	_var($scope0_id, "b", $childScope, "a3");
	_html(`<button>${_text_mark($scope0_id, "d", c)}</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: c,
		a: _existing_scope($childScope)
	});
}, 1);
