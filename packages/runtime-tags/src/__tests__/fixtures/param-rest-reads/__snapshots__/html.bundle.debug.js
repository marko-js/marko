// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [
		1,
		2,
		3
	], 0, 1, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ content: _content("__tests__/template.marko_1*content", (first, ...others) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<div>${_text_mark($scope1_id, "#text/0", first, _write_guard($scope1_reason, 1))}|${_text_mark($scope1_id, "#text/1", others[0], _write_guard($scope1_reason, 2) * 2)}|${_text_mark($scope1_id, "#text/2", others[1], _write_guard($scope1_reason, 3) * 2)}|${_text_mark($scope1_id, "#text/3", others.length, _write_guard($scope1_reason, 4) * 2)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) });
	child_default({ content: _content("__tests__/template.marko_2*content", (x, ...[y, z]) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<div>${_text_mark($scope2_id, "#text/0", x, _write_guard($scope2_reason, 1))}-${_text_mark($scope2_id, "#text/1", y, _write_guard($scope2_reason, 2) * 2)}-${_text_mark($scope2_id, "#text/2", z, _write_guard($scope2_reason, 3) * 2)}</div>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) });
}, 1);
