// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_z = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const x = _id();
	const z = input.z || _id();
	const y = _id();
	_html(`<div${_attr("id", z)}>${_escape(x)} ${_escape(y)} ${_text_resume($scope0_id, "d", z, $sg__input_z * 2)}</div>${_el_resume($scope0_id, "a", $sg__input_z)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
