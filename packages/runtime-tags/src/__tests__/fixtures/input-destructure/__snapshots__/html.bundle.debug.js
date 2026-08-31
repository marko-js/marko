// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`${_text_resume($scope0_id, "#text/0", a, _serialize_guard($scope0_reason, 1) * 2)} ${_text_resume($scope0_id, "#text/1", b, _serialize_guard($scope0_reason, 2) * 2)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
