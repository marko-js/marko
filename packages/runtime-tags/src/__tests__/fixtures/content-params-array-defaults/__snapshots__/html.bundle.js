// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a0", ([$a, b]) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__$a = _serialize_guard($scope1_reason, 1), $sg__b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_text_resume($scope1_id, "a", void 0 !== $a ? $a : 1, $sg__$a)}|${_text_resume($scope1_id, "b", b, $sg__b * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	Wrap.content([void 0, n]);
	_set_serialize_reason(1);
	const $childScope2 = _peek_scope_id();
	Wrap.content([n, 10]);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: n,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
