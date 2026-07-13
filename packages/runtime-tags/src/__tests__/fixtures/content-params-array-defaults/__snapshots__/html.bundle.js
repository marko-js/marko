// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a0", ([$a, b]) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_escape(void 0 !== $a ? $a : 1)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))}|${_sep($sg__b)}${_escape(b)}${_el_resume($scope1_id, "b", $sg__b)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content([void 0, n]);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content([n, 10]);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: n,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
