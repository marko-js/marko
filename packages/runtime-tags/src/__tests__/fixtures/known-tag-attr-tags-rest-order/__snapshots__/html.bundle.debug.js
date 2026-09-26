// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_first = _serialize_guard($scope0_reason, 1), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { first, ...rest } = input;
	_html(`<div>${_text_resume($scope0_id, "#text/0", first, $sg__input_first)}:${_text_resume($scope0_id, "#text/1", Object.keys(rest).join(","), $sg__rest * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(42);
	let $cond;
	if (n) {
		$cond = attrTag({ z: 2 });
	}
	const $childScope = _peek_scope_id();
	child_default({
		first: n,
		s: n,
		cond: $cond,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	_set_serialize_reason(42);
	const $childScope2 = _peek_scope_id();
	child_default({
		first: n,
		...input,
		s: n,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input,
		n,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input: 0,
		n: "1:6"
	});
}, 1);
