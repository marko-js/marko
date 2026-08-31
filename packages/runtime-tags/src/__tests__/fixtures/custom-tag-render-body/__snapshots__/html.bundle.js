// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, content } = input;
	_html(_text_resume($scope0_id, "a", name, _serialize_guard($scope0_reason, 1) * 2));
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	child_default({
		name: "World",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("This is the body content");
		}, _scope_id())
	});
}, 1);
