// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_tag__OR__input_button = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.tag, input.button, 0, 0, $sg__input_tag__OR__input_button);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		input_tag: _serialize_if($scope0_reason, 2) && input.tag,
		input_button: _serialize_if($scope0_reason, 1) && input.button
	}, "__tests__/tags/child.marko", 0, {
		input_tag: ["input.tag"],
		input_button: ["input.button"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		tag: "button",
		button: attrTag({
			onClick: _resume(function() {
				count++;
			}, "__tests__/template.marko_0/onClick", $scope0_id),
			content: _content("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(_text_resume($scope1_id, "#text/0", count));
				_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
			}, $scope0_id)
		})
	});
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
