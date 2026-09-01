// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [
		1,
		2,
		3
	], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	forOf(list, (item, ...meta) => {
		_scope_id();
		_html(`<div>${_escape(item)}:${_escape(meta[0])}:${_escape(meta.length)}</div>`);
	});
	forOf(list, (item, ...[idx]) => {
		_scope_id();
		_html(`<div>${_escape(item)}@${_escape(idx)}</div>`);
	});
	child_default({ content: _content("a0", (first, ...others) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<div>${_text_resume($scope3_id, "a", first, _serialize_guard($scope3_reason, 1))}|${_text_resume($scope3_id, "b", others[0], _serialize_guard($scope3_reason, 2) * 2)}|${_text_resume($scope3_id, "c", others[1], _serialize_guard($scope3_reason, 3) * 2)}|${_text_resume($scope3_id, "d", others.length, _serialize_guard($scope3_reason, 4) * 2)}</div>`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) });
	child_default({ content: _content("a1", (x, ...[y, z]) => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<div>${_text_resume($scope4_id, "a", x, _serialize_guard($scope4_reason, 1))}-${_text_resume($scope4_id, "b", y, _serialize_guard($scope4_reason, 2) * 2)}-${_text_resume($scope4_id, "c", z, _serialize_guard($scope4_reason, 3) * 2)}</div>`);
		_serialize_if($scope4_reason, 0) && _scope($scope4_id, {});
	}, $scope0_id) });
}, 1);
