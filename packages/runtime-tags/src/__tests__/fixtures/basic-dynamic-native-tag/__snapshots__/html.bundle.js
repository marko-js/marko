// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tagName = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tagName, { class: ["a", "b"] }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Hello World");
	}, $scope0_id), 0, $wg__input_tagName);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
