// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_active = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { active } = input;
	_html(`<svg class=${active ? "\"icon active\"" : "icon"}><circle class=${active ? "on" : "off"} cx=50 cy=50 r=40></circle>${_el_resume($scope0_id, "b", $wg__input_active)}</svg>${_el_resume($scope0_id, "a", $wg__input_active)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
