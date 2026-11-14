// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const ChildA = { content: _content("a0", ({ foo, foo: $foo }) => {
		_scope_id();
		_scope_reason();
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		_html(`<div class=a>${_escape(void 0 !== $bar ? $bar : 1)} ${_escape(typeof foo)}</div>`);
	}, $scope0_id) };
	ChildA.content({ foo: { bar: 0 } });
	ChildA.content({ foo: {} });
	ChildA.content({});
	const ChildB = { content: _content("a1", (input) => {
		_scope_id();
		_scope_reason();
		const { bar: $bar2 } = void 0 !== input.foo ? input.foo : { bar: 2 };
		_html(`<div class=b>${_escape(void 0 !== $bar2 ? $bar2 : 1)} ${_escape(typeof input.foo)}</div>`);
	}, $scope0_id) };
	ChildB.content({ foo: { bar: 0 } });
	ChildB.content({ foo: {} });
	ChildB.content({});
}, 1);
