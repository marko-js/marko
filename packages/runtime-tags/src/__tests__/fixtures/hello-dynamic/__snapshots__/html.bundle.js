// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`Hello ${_text_resume($scope0_id, "a", input.name, $sg__input_name * 2)}! Hello ${_html_resume($scope0_id, "b", input.name, $sg__input_name * 2)}! Hello ${_html_resume($scope0_id, "c", input.missing, _serialize_guard($scope0_reason, 2) * 2)}!`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
