// template.marko
function track(value) {
	return value;
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	(class {
		static made = track(3);
	});
	input.a;
	(() => track(2))();
	_html(`<div>${_text_resume($scope0_id, "a", input.a?.b, $sg__input_a_b)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
