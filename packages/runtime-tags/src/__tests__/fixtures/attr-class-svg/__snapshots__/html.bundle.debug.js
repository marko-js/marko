// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_active = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { active } = input;
	_html(`<svg${_attr_class(["icon", { active }])}><circle${active ? " class=on" : " class=off"} cx=50 cy=50 r=40></circle>${_el_resume($scope0_id, "#circle/1", $sg__input_active)}</svg>${_el_resume($scope0_id, "#svg/0", $sg__input_active)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
