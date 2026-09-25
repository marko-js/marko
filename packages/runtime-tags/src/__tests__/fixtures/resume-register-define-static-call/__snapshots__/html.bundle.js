// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Heading = { content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		const $Heading_content__input_content__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope1_reason, 2), $si__input_type__OR__input_content = _serialize_if($scope1_reason, 0), $sg__input_type = _serialize_guard($scope1_reason, 1), $si__input_content = _serialize_if($scope1_reason, 2);
		_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $sg__input_content);
			$si__input_type__OR__input_content && _subscribe($si__input_content && $Heading_content__input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $sg__input_content);
			$sg__input_content || $si__input_type__OR__input_content && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ e: input.content }]), 0, $sg__input_type);
		$si__input_type__OR__input_content && _scope($scope1_id, {
			e: _serialize_if($scope1_reason, 1) && input.content,
			f: $si__input_content && $Heading_content__input_content__closures
		});
	}, $scope0_id) };
	Heading.content({
		type: "h1",
		content: _content("a3", () => {
			_scope_reason();
			_scope_id();
			_html("static content: not registered");
		}, $scope0_id)
	});
	Heading.content({
		type: "h2",
		content: _content("a4", () => {
			_scope_reason();
			_scope_id();
			_html("also static: not registered");
		}, $scope0_id)
	});
	_script($scope0_id, "a5");
	_scope($scope0_id, { e: count });
}, 1);
