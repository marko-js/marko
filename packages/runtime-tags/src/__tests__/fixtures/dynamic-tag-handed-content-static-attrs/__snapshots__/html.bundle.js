// tags/one.marko
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { class: "x" }, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	one_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`A${_text_resume($scope1_id, "a", input.y, $wg__input_y * 2)}`);
		$wi__input_y && _subscribe($input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_y);
		$wg__input_y || $wi__input_y && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_y && _scope($scope0_id, { e: $input_y__closures });
}, 1);
