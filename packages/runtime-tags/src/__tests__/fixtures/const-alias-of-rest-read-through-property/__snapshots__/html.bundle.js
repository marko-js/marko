// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_obj = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { a, ...rest } = input.obj;
	const r = rest;
	_html(`<div>${_text_resume($scope0_id, "a", a, $wg__input_obj)} ${_text_resume($scope0_id, "b", r.b, $wg__input_obj * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
