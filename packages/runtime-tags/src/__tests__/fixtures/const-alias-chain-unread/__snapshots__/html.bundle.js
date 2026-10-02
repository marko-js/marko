// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_o_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.o.name, $wg__input_o_name)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
