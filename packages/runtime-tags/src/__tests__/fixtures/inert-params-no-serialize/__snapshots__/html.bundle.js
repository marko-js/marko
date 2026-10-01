// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.value], 0, 1, $wg__input_content__OR__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.content,
		e: _write_if($scope0_reason, 1) && input.value
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({
		value: "Hi",
		content: _content("a0", (x) => {
			const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", x, $wg__x));
			_write_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id)
	});
}, 1);
