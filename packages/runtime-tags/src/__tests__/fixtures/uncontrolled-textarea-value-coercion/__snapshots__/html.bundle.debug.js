// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<textarea>${_textarea_value(input.v)}</textarea>${_el_resume($scope0_id, "#textarea/0", $sg__input_v)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
