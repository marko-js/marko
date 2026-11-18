// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [
		1,
		2,
		3
	], 0, 1, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ content: _content("a0", (first, ...others) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<div>${_text_mark($scope1_id, "a", first, _write_guard($scope1_reason, 1))}|${_text_mark($scope1_id, "b", others[0], _write_guard($scope1_reason, 2) * 2)}|${_text_mark($scope1_id, "c", others[1], _write_guard($scope1_reason, 3) * 2)}|${_text_mark($scope1_id, "d", others.length, _write_guard($scope1_reason, 4) * 2)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) });
	child_default({ content: _content("a1", (x, ...[y, z]) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<div>${_text_mark($scope2_id, "a", x, _write_guard($scope2_reason, 1))}-${_text_mark($scope2_id, "b", y, _write_guard($scope2_reason, 2) * 2)}-${_text_mark($scope2_id, "c", z, _write_guard($scope2_reason, 3) * 2)}</div>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) });
}, 1);
