// tags/child-b/index.marko
var child_b_default = _template("__tests__/tags/child-b/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child-b/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const j1 = { a: 5 };
	const j2 = { a: 6 };
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_b_default({
		...j1,
		...j2,
		a: n
	});
	_script($scope0_id, "__tests__/template.marko_0_n");
	writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1);
