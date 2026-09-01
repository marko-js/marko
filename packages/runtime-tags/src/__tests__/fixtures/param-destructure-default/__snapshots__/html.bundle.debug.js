// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const ChildA = { content: _content("__tests__/template.marko_1*content", ({ foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__foo = _serialize_guard($scope1_reason, 0);
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		const bar = void 0 !== $bar ? $bar : 1;
		_html(`<div class=a>${_text_resume($scope1_id, "#text/0", bar, $sg__foo)} ${_text_resume($scope1_id, "#text/1", typeof foo, $sg__foo * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}, $scope0_id) };
	ChildA.content({ foo: { bar: 0 } });
	ChildA.content({ foo: {} });
	ChildA.content({});
	const ChildB = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__foo2 = _serialize_guard($scope2_reason, 0);
		const { foo, foo: $foo2 } = input;
		const { bar: $bar2 } = void 0 !== $foo2 ? $foo2 : { bar: 2 };
		const bar = void 0 !== $bar2 ? $bar2 : 1;
		_html(`<div class=b>${_text_resume($scope2_id, "#text/0", bar, $sg__foo2)} ${_text_resume($scope2_id, "#text/1", typeof foo, $sg__foo2 * 2)}</div>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "8:1");
	}, $scope0_id) };
	ChildB.content({ foo: { bar: 0 } });
	ChildB.content({ foo: {} });
	ChildB.content({});
}, 1);
