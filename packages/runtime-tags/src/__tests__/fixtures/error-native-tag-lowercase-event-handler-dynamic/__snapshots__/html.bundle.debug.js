// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_handler = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button${_attr("onclick", input.handler)}>Click me</button>${_el_resume($scope0_id, "#button/0", $wg__input_handler)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
