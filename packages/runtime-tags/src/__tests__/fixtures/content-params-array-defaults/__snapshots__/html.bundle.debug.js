// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/template.marko_1*content", ([$a, b]) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const a = void 0 !== $a ? $a : 1;
		_html(`<div>${_text_resume($scope1_id, "#text/0", a, _serialize_guard($scope1_reason, 1))}|${_text_resume($scope1_id, "#text/1", b, _serialize_guard($scope1_reason, 2) * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	let n = 2;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	Wrap.content([undefined, n]);
	_set_serialize_reason(1);
	const $childScope2 = _peek_scope_id();
	Wrap.content([n, 10]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "4:6" });
	_resume_branch($scope0_id);
}, 1);
