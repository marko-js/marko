// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content__OR__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.value], 0, 1, $sg__input_content__OR__input_value);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.content,
		e: _serialize_if($scope0_reason, 1) && input.value
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	child_default({
		value: "Hi",
		content: _content("a0", (x) => {
			const $scope1_reason = _scope_reason(), $sg__x = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", x, $sg__x));
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, _scope_id())
	});
}, 1);
