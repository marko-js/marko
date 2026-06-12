// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [
		1,
		2,
		3
	], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf(["a", "b"], (item, ...meta) => {
		_scope_id();
		_html(`<div>${_escape(item)}:${_escape(meta[0])}:${_escape(meta.length)}</div>`);
	});
	child_default({ content: _content("a0", (first, ...others) => {
		const $scope2_reason = _scope_reason(), $sg__$params3_ = _serialize_guard($scope2_reason, 2), $sg__$params3_2 = _serialize_guard($scope2_reason, 3), $sg__others_length = _serialize_guard($scope2_reason, 4);
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(first)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 1))}|${_sep($sg__$params3_)}${_escape(others[0])}${_el_resume($scope2_id, "b", $sg__$params3_)}|${_sep($sg__$params3_2)}${_escape(others[1])}${_el_resume($scope2_id, "c", $sg__$params3_2)}|${_sep($sg__others_length)}${_escape(others.length)}${_el_resume($scope2_id, "d", $sg__others_length)}</div>`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}) });
	_resume_branch($scope0_id);
}, 1);
