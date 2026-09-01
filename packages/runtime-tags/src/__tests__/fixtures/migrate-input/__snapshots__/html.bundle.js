// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div><span>${_text_resume($scope0_id, "a", input.x, _serialize_guard($scope0_reason, 0))}</span></div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
