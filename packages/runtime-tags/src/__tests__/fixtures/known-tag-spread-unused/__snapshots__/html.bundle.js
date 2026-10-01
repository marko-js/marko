// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_foo = _write_guard($scope1_reason, 0);
		_html(_text_resume($scope1_id, "a", input.foo || "fallback", $wg__input_foo));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	({ content: _content("a1", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__input_foo2 = _write_guard($scope2_reason, 0);
		_set_scope_reason($wg__input_foo2 << 1);
		const $childScope = _peek_scope_id();
		Foo.content(input);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) }).content({});
}, 1);
