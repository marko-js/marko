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

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	heading_default({
		type: "h1",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button id=inc>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_if(() => {
				if (count % 2) {
					const $scope2_id = _scope_id();
					_html("<em>odd</em>");
					_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
					return 0;
				}
			}, $scope1_id, "#text/2", 1, 1, 1, 0, 1);
			_script($scope1_id, "__tests__/template.marko_1");
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_count#1/subscribe");
		}, $scope0_id)
	});
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
