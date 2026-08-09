// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_z = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const x = _id();
	const z = input.z || _id();
	const y = _id();
	_html(`<div${_attr("id", z)}>${_escape(x)} ${_escape(y)} ${_sep($sg__input_z)}${_escape(z)}${_el_resume($scope0_id, "#text/3", $sg__input_z)}</div>${_el_resume($scope0_id, "#div/0", $sg__input_z)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
