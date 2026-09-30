// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { a: { b } } = input;
	const { a } = input;
	const { b: c } = a;
	_html(`<button>${_text_resume($scope0_id, "a", b, $sg__input_a_b)} ${_text_resume($scope0_id, "b", c, $sg__input_a_b * 2)}</button>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
