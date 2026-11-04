// tags/one.marko
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { title: input.t }, 0, 0, $wg__input_content__OR__input_t);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.content,
		e: _write_if($scope0_reason, 1) && input.t
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		t: input.y,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
