// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.x, $sg__input_x * 2)}<b></b><i></i></div><div><b></b><i>${_text_resume($scope0_id, "b", input.x, $sg__input_x)}</i><u></u></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
