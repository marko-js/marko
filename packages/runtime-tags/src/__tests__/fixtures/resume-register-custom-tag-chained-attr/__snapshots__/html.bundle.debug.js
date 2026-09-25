// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_content = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 1), $si__input_content = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
		$si__input_type__OR__input_content && _subscribe($si__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:4"), "__tests__/tags/heading.marko_1_input_content#4/subscribe", $sg__input_content);
		$sg__input_content || $si__input_type__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_content: input.content }]), 0, $sg__input_type);
	$si__input_type__OR__input_content && _scope($scope0_id, {
		input_content: _serialize_if($scope0_reason, 1) && input.content,
		"ClosureScopes:input_content": $si__input_content && $input_content__closures
	}, "__tests__/tags/heading.marko", 0, { input_content: ["input.content"] });
});

// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 2), $si__input_kind__OR__input_content = _serialize_if($scope0_reason, 0), $sg__input_kind = _serialize_guard($scope0_reason, 1), $si__input_content = _serialize_if($scope0_reason, 2), $si__input_kind = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_set_serialize_reason($sg__input_kind << 1 | $sg__input_kind << 3);
	const $childScope = _peek_scope_id();
	heading_default({
		type: input.kind,
		content: _content_resume("__tests__/tags/wrapper.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			$si__input_kind__OR__input_content && _subscribe($si__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "2:2"), "__tests__/tags/wrapper.marko_1_input_content#4/subscribe", $sg__input_content);
			$sg__input_content || $si__input_kind__OR__input_content && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$si__input_kind__OR__input_content && _scope($scope0_id, {
		input_content: $si__input_kind && input.content,
		"ClosureScopes:input_content": $si__input_content && $input_content__closures,
		"#childScope/0": $si__input_kind && _existing_scope($childScope)
	}, "__tests__/tags/wrapper.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	wrapper_default({
		kind: "h1",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("chained string: not registered");
		}, $scope0_id)
	});
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	wrapper_default({
		kind: count % 2 ? "h2" : "h1",
		content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("chained state string: not registered");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
