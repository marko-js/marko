// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`${_text_resume($scope0_id, "a", a, _serialize_guard($scope0_reason, 1) * 2)} ${_text_resume($scope0_id, "b", b, _serialize_guard($scope0_reason, 2) * 2)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
