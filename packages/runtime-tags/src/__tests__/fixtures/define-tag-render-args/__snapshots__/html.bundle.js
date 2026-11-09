// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", (a, b, $c) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const c = void 0 !== $c ? $c : a + 1;
		_html(`<div>${_text_mark($scope1_id, "a", a, _write_guard($scope1_reason, 2))}|${_text_mark($scope1_id, "b", b, 0)}|${_text_mark($scope1_id, "c", c, 2)}</div>`);
		_scope($scope1_id, {
			e: _write_if($scope1_reason, 4) && a,
			g: _write_if($scope1_reason, 2) && $c
		});
	}, $scope0_id) };
	_set_scope_reason(522);
	const $childScope = _peek_scope_id();
	MyTag.content(1, "Hello", x);
	_set_scope_reason(42);
	const $childScope2 = _peek_scope_id();
	MyTag.content(x);
	const Outer = { content: _content("a1", (v) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_scope_reason(42);
		const $childScope3 = _peek_scope_id();
		MyTag.content(v);
		_scope($scope2_id, { a: _existing_scope($childScope3) });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope4 = _peek_scope_id();
	Outer.content(x);
	_html(`<button>${_text_mark($scope0_id, "e", x)}</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: x,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope4)
	});
}, 1);
