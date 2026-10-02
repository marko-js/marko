// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_list = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const [ ...all] = input.list;
	_html(`<div>${_text_resume($scope0_id, "#text/0", all.join("+"), $wg__input_list)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
