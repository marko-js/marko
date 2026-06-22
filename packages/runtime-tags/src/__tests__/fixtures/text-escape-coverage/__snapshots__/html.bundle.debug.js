// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_c = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${input.a ? "" : "1"}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</div><div>${input.b ? "true" : "x&lt;y"}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</div><div>before mid ${_sep($sg__input_c)}${_escape(`${input.c}`)}${_el_resume($scope0_id, "#text/2", $sg__input_c)} end after</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
