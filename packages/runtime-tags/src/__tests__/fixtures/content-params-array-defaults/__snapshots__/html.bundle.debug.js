// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/template.marko_1_content", ([$a, b]) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 2);
		const a = void 0 !== $a ? $a : 1;
		_html(`<div>${_escape(a)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 1))}|${_sep($sg__b)}${_escape(b)}${_el_resume($scope1_id, "#text/1", $sg__b)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}) };
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content([undefined, n]);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content([n, 10]);
	_script($scope0_id, "__tests__/template.marko_0_n");
	writeScope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "4:6" });
	_resume_branch($scope0_id);
}, 1);
