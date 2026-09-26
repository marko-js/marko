// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 2), $si__input_as__OR__input_text = _serialize_if($scope0_reason, 0), $sg__input_as = _serialize_guard($scope0_reason, 1), $si__input_text = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.as || "div", {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_resume($scope1_id, "#text/0", input.text, $sg__input_text));
		$si__input_as__OR__input_text && _subscribe($si__input_text && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:4"), "__tests__/tags/heading.marko_1_input_text#4/subscribe", $sg__input_text);
		$sg__input_text || $si__input_as__OR__input_text && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_text: input.text }]), 0, $sg__input_as);
	$si__input_as__OR__input_text && _scope($scope0_id, {
		input_text: _serialize_if($scope0_reason, 1) && input.text,
		"ClosureScopes:input_text/5": $si__input_text && $input_text__closures
	}, "__tests__/tags/heading.marko", 0, { input_text: ["input.text"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		as: "h2",
		text: "Hello"
	});
}, 1);
