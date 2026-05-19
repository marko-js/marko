// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	const Child = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_escape(input.text)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 1))} and `);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 2));
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:1");
	}) };
	const { text } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_text,
		1: $sg__input_text
	});
	Child.content({
		text: input.text,
		content: _content("__tests__/template.marko_2_content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_escape(text)}${_el_resume($scope2_id, "#text/0", $sg__input_text)}`);
			$si__input_text && _subscribe($input_text__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:1"));
			_resume_branch($scope2_id);
		})
	});
	$si__input_text && writeScope($scope0_id, {
		"ClosureScopes:input_text": $input_text__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
