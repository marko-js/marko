// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_text_mark($scope0_id, "a", input.value, _write_guard($scope0_reason, 0) * 2)} ${_text_mark($scope0_id, "b", input.value[0], _write_guard($scope0_reason, 1) * 2)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
