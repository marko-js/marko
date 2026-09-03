// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text2 = _serialize_guard($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope1_reason, 1), $sg__input_content = _serialize_guard($scope1_reason, 2);
		_html(`${_text_resume($scope1_id, "#text/0", input.text, $sg__input_text)} and `);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, $sg__input_content);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}, $scope0_id) };
	const { text } = input;
	_set_serialize_reason({
		0: $sg__input_text2,
		1: $sg__input_text2
	});
	const $childScope = _peek_scope_id();
	Child.content({
		text: input.text,
		content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "#text/0", text, $sg__input_text2));
			$si__input_text && _subscribe($input_text__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:1"));
			$sg__input_text2 || $si__input_text && _resume_branch($scope2_id);
		}, $scope0_id)
	});
	$si__input_text && _scope($scope0_id, {
		"ClosureScopes:input_text": $input_text__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
