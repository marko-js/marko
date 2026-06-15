// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { first, ...rest } = input;
	_html(`<div>${_escape(first)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}:${_sep($sg__rest)}${_escape(Object.keys(rest).join(","))}${_el_resume($scope0_id, "#text/1", $sg__rest)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		1: 1
	});
	child_default({
		first: n,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	_script($scope0_id, "__tests__/template.marko_0_n");
	writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
