// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text2 = _write_guard($scope0_reason, 0), $wi__input_text = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_text = _write_guard($scope1_reason, 1), $wg__input_content = _write_guard($scope1_reason, 2);
		_html(`${_text_resume($scope1_id, "a", input.text, $wg__input_text)} and `);
		_dynamic_tag($scope1_id, "b", input.content, {}, 0, 0, $wg__input_content);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason($wg__input_text2 << 1 | $wg__input_text2 << 3);
	const $childScope = _peek_scope_id();
	Child.content({
		text: input.text,
		content: _content("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "a", input.text, $wg__input_text2));
			$wi__input_text && _subscribe($input_text__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_text2);
			$wg__input_text2 || $wi__input_text && _resume_branch($scope2_id);
		}, $scope0_id)
	});
	$wi__input_text && _scope($scope0_id, {
		e: $input_text__closures,
		a: _existing_scope($childScope)
	});
}, 1);
