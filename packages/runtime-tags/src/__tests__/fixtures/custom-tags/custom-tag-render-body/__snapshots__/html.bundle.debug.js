// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 1), $sg__input_content = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { name, content } = input;
	_html(_text_resume($scope0_id, "#text/0", name, $sg__input_name * 2));
	_dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({
		name: "World",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("This is the body content");
		}, $scope0_id)
	});
}, 1);
