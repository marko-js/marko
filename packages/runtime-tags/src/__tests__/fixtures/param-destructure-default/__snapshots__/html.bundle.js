// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const ChildA = { content: _content("a0", ({ foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		_html(`<div class=a>${_text_mark($scope1_id, "a", void 0 !== $bar ? $bar : 1, 0)} ${_text_mark($scope1_id, "b", typeof foo, 0)}</div>`);
	}, $scope0_id) };
	ChildA.content({ foo: { bar: 0 } });
	ChildA.content({ foo: {} });
	ChildA.content({});
	const ChildB = { content: _content("a1", (input) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const { bar: $bar2 } = void 0 !== input.foo ? input.foo : { bar: 2 };
		_html(`<div class=b>${_text_mark($scope2_id, "a", void 0 !== $bar2 ? $bar2 : 1, 0)} ${_text_mark($scope2_id, "b", typeof input.foo, 0)}</div>`);
	}, $scope0_id) };
	ChildB.content({ foo: { bar: 0 } });
	ChildB.content({ foo: {} });
	ChildB.content({});
}, 1);
