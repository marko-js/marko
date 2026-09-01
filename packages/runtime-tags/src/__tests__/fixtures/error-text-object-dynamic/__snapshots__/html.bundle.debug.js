// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.value, _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
