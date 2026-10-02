// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const ChildA = { content: _content("a0", ({ foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__foo = _write_guard($scope1_reason, 0);
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		_html(`<div class=a>${_text_resume($scope1_id, "a", void 0 !== $bar ? $bar : 1, $wg__foo)} ${_text_resume($scope1_id, "b", typeof foo, $wg__foo * 2)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	ChildA.content({ foo: { bar: 0 } });
	ChildA.content({ foo: {} });
	ChildA.content({});
	const ChildB = { content: _content("a1", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__foo2 = _write_guard($scope2_reason, 0);
		const { bar: $bar2 } = void 0 !== input.foo ? input.foo : { bar: 2 };
		_html(`<div class=b>${_text_resume($scope2_id, "a", void 0 !== $bar2 ? $bar2 : 1, $wg__foo2)} ${_text_resume($scope2_id, "b", typeof input.foo, $wg__foo2 * 2)}</div>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	ChildB.content({ foo: { bar: 0 } });
	ChildB.content({ foo: {} });
	ChildB.content({});
}, 1);
