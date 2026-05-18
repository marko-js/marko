// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_escape(input.text)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))} and `);
		_dynamic_tag($scope1_id, "b", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 2));
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const { text } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_text,
		1: $sg__input_text
	});
	Child.content({
		text: input.text,
		content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_escape(text)}${_el_resume($scope2_id, "a", $sg__input_text)}`);
			$si__input_text && _subscribe($input_text__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope2_id);
		})
	});
	$si__input_text && writeScope($scope0_id, {
		Bd: $input_text__closures,
		a: _existing_scope($childScope)
	});
}, 1);
