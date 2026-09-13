// template.marko
const $template = "<div><!> <!> <!></div>";
const $walks = " D%c%c%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko; D%c%c%;<div><!> <!> <!></div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	const z = input.z || _id();
	const y = _id();
	_html(`<div${_patch_attr($scope0_id, "#div/0", "id", z, $scope0_owned, 0)}>${_patch_text($scope0_id, "#text/1", x, void 0, 0, 0)} ${_patch_text($scope0_id, "#text/2", y, 2, 0, 0)} ${_patch_text($scope0_id, "#text/3", z, 2, $scope0_owned, 0)}</div>${_el_resume($scope0_id, "#div/0")}`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
