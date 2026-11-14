// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const ChildA = { content: _content("__tests__/template.marko_1*content", ({ foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		const bar = void 0 !== $bar ? $bar : 1;
		_html(`<div class=a>${_escape(bar)} ${_escape(typeof foo)}</div>`);
	}, $scope0_id) };
	ChildA.content({ foo: { bar: 0 } });
	ChildA.content({ foo: {} });
	ChildA.content({});
	const ChildB = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const { bar: $bar2 } = void 0 !== input.foo ? input.foo : { bar: 2 };
		const bar = void 0 !== $bar2 ? $bar2 : 1;
		_html(`<div class=b>${_escape(bar)} ${_escape(typeof input.foo)}</div>`);
	}, $scope0_id) };
	ChildB.content({ foo: { bar: 0 } });
	ChildB.content({ foo: {} });
	ChildB.content({});
}, 1);
