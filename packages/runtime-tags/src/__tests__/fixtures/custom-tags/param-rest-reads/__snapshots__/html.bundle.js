// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [
		1,
		2,
		3
	], 0, 1, $sg__input_content);
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
		const $scope3_reason = _scope_reason(), $sg__first = _serialize_guard($scope3_reason, 1), $sg__$params4_ = _serialize_guard($scope3_reason, 2), $sg__$params4_2 = _serialize_guard($scope3_reason, 3), $sg__others_length = _serialize_guard($scope3_reason, 4);
		const $scope3_id = _scope_id();
		_html(`<div>${_text_resume($scope3_id, "a", first, $sg__first)}|${_text_resume($scope3_id, "b", others[0], $sg__$params4_ * 2)}|${_text_resume($scope3_id, "c", others[1], $sg__$params4_2 * 2)}|${_text_resume($scope3_id, "d", others.length, $sg__others_length * 2)}</div>`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) });
	child_default({ content: _content("a1", (x, ...[y, z]) => {
		const $scope4_reason = _scope_reason(), $sg__x = _serialize_guard($scope4_reason, 1), $sg__y = _serialize_guard($scope4_reason, 2), $sg__z = _serialize_guard($scope4_reason, 3);
		const $scope4_id = _scope_id();
		_html(`<div>${_text_resume($scope4_id, "a", x, $sg__x)}-${_text_resume($scope4_id, "b", y, $sg__y * 2)}-${_text_resume($scope4_id, "c", z, $sg__z * 2)}</div>`);
		_serialize_if($scope4_reason, 0) && _scope($scope4_id, {});
	}, $scope0_id) });
}, 1);
