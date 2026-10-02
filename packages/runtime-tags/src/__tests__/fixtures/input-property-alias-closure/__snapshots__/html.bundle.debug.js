// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text2 = _write_guard($scope0_reason, 0), $wi__input_text = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_text = _write_guard($scope1_reason, 1), $wg__input_content = _write_guard($scope1_reason, 2);
		_html(`${_text_resume($scope1_id, "#text/0", input.text, $wg__input_text)} and `);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}, $scope0_id) };
	_set_scope_reason($wg__input_text2 << 1 | $wg__input_text2 << 3);
	const $childScope = _peek_scope_id();
	Child.content({
		text: input.text,
		content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "#text/0", input.text, $wg__input_text2));
			$wi__input_text && _subscribe($input_text__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:1"), "__tests__/template.marko_2_input_text#0:3/subscribe", $wg__input_text2);
			$wg__input_text2 || $wi__input_text && _resume_branch($scope2_id);
		}, $scope0_id)
	});
	$wi__input_text && _scope($scope0_id, {
		"ClosureScopes:input_text/4": $input_text__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
