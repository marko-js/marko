// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_active = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { active } = input;
	_html(`<div${_attr_class(`${void 0}${active ? " " + void 0 : ""}`)}></div>${_el_resume($scope0_id, "a", $sg__input_active)}<div${_attr_class(`${void 0}${active ? " " + void 0 : ""}`)}></div>${_el_resume($scope0_id, "b", $sg__input_active)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
