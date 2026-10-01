// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { a: { b } } = input;
	const { a } = input;
	const { b: c } = a;
	_html(`<button>${_text_resume($scope0_id, "#text/0", b, $wg__input_a_b)} ${_text_resume($scope0_id, "#text/1", c, $wg__input_a_b * 2)}</button>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
