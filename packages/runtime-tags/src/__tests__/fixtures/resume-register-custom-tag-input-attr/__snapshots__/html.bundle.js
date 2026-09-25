// tags/heading.marko
var heading_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_content = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 1), $si__input_content = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $sg__input_content);
		$si__input_type__OR__input_content && _subscribe($si__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $sg__input_content);
		$sg__input_content || $si__input_type__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.content }]), 0, $sg__input_type);
	$si__input_type__OR__input_content && _scope($scope0_id, {
		e: _serialize_if($scope0_reason, 1) && input.content,
		f: $si__input_content && $input_content__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason($sg__input_type << 1 | $sg__input_type << 3);
	const $childScope = _peek_scope_id();
	heading_default({
		type: input.type,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("input driven: content registered, body dropped");
		}, $scope0_id)
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: count,
		c: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
