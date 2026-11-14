// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_1*content", (a, b, $c) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const c = void 0 !== $c ? $c : a + 1;
		_html(`<div>${_text_mark($scope1_id, "#text/0", a, _write_guard($scope1_reason, 2))}|${_escape(b)}|${_text_mark($scope1_id, "#text/2", c, 2)}</div>`);
		_scope($scope1_id, {
			a: _write_if($scope1_reason, 4) && a,
			$c: _write_if($scope1_reason, 2) && $c
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			$c: "2:21"
		});
	}, $scope0_id) };
	_set_scope_reason(522);
	const $childScope = _peek_scope_id();
	MyTag.content(1, "Hello", x);
	_set_scope_reason(42);
	const $childScope2 = _peek_scope_id();
	MyTag.content(x);
	const Outer = { content: _content("__tests__/template.marko_2*content", (v) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(42);
		const $childScope3 = _peek_scope_id();
		MyTag.content(v);
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "8:2");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope4 = _peek_scope_id();
	Outer.content(x);
	_html(`<button>${_text_mark($scope0_id, "#text/4", x)}</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
