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
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		t: input.y,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "a", input.y, $wg__input_y * 2)}`);
			$wi__input_y && _subscribe($input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_y);
			$wg__input_y || $wi__input_y && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_y && _scope($scope0_id, {
		e: $input_y__closures,
		a: _existing_scope($childScope)
	});
}, 1);
