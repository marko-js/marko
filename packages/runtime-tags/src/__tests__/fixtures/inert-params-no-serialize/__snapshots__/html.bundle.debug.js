// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.value], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		input_content: _serialize_if($scope0_reason, 2) && input.content,
		input_value: _serialize_if($scope0_reason, 1) && input.value
	}, "__tests__/tags/child.marko", 0, {
		input_content: ["input.content"],
		input_value: ["input.value"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({
		value: "Hi",
		content: _content_resume("__tests__/template.marko_1_content", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(x)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}`);
			_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
}, 1);
