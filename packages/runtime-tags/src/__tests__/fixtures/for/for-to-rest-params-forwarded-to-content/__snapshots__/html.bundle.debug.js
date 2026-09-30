// tags/my-for.marko
var my_for_default = _template("__tests__/tags/my-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_to__OR__input_content = _serialize_guard($scope0_reason, 0), $sg__input_to = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, [...args], 0, 1, $sg__input_to__OR__input_content);
		_serialize_if($scope0_reason, 0) && _scope($scope1_id, {
			args: _serialize_if($scope0_reason, 2) && args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/my-for.marko", "1:2", { args: "1:6" });
	}, 0, $scope0_id, "#text/0", $sg__input_to__OR__input_content, $sg__input_to, $sg__input_to);
	_serialize_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/my-for.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_for_default({
		to: 5,
		content: _content("__tests__/template.marko_1*content", (i) => {
			const $scope1_reason = _scope_reason(), $sg__i = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", i, $sg__i));
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
}, 1);
