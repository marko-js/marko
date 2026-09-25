// heading.marko
var heading_default = _template("__tests__/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_content = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 1), $si__input_content = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
		$si__input_type__OR__input_content && _subscribe($si__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/heading.marko", "1:4"), "__tests__/heading.marko_1_input_content#4/subscribe", $sg__input_content);
		$sg__input_content || $si__input_type__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_content: input.content }]), 0, $sg__input_type);
	$si__input_type__OR__input_content && _scope($scope0_id, {
		input_content: _serialize_if($scope0_reason, 1) && input.content,
		"ClosureScopes:input_content": $si__input_content && $input_content__closures
	}, "__tests__/heading.marko", 0, { input_content: ["input.content"] });
});

// template.marko
const $Heading_withLoadAssets = withLoadAssets(heading_default, "ready:__tests__/heading.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	$Heading_withLoadAssets({
		type: count % 2 ? "h2" : "h1",
		content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("lazy child: registered");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
