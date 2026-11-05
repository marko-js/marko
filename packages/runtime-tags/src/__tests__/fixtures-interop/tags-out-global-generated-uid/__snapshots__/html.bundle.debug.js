// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_global = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const global = void 0 !== input.global ? input.global : {};
	_html(`<div>${_escape($global$1.x)} ${_text_mark($scope0_id, "#text/1", global.x, $wg__input_global * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
