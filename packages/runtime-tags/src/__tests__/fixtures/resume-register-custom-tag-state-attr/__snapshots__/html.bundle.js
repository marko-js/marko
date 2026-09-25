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
	_scope_reason();
	const $scope0_id = _scope_id();
	let big = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	heading_default({
		type: "h1",
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("state driven string: not registered");
		}, $scope0_id)
	});
	heading_default({
		type: "h3",
		content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("static: not registered");
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: big,
		b: _existing_scope($childScope)
	});
}, 1);
