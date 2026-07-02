// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { first, ...rest } = input;
	_html(`<div>${_escape(first)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}:${_sep($sg__rest)}${_escape(Object.keys(rest).join(","))}${_el_resume($scope0_id, "b", $sg__rest)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(6);
	child_default({
		first: n,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
