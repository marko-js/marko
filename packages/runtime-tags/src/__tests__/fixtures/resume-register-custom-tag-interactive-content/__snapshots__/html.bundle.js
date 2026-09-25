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
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	heading_default({
		type: "h1",
		content: _content("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button id=inc>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_if(() => {
				if (count % 2) {
					const $scope2_id = _scope_id();
					_html("<em>odd</em>");
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "c", 1, 1, 1, 0, 1);
			_script($scope1_id, "a0");
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
		}, $scope0_id)
	});
	_scope($scope0_id, {
		b: count,
		c: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
