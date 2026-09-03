// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_n = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const doubled = input.n * 2;
	const tripled = input.n * 3;
	_html(`<div>${_text_resume($scope0_id, "#text/0", doubled + tripled, $sg__input_n)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	child_default({ n });
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
