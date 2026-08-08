// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_sep($sg__input_x)}${_escape(input.x)}${_el_resume($scope0_id, "#text/0", $sg__input_x)}<b></b><i></i></div><div><b></b><i>${_escape(input.x)}${_el_resume($scope0_id, "#text/1", $sg__input_x)}</i><u></u></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
