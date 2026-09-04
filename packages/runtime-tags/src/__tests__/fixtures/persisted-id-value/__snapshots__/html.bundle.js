// template.marko
_shells({ a: "a; D%c%c%;<div><!> <!> <!></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	const z = input.z || _id();
	const y = _id();
	_html(`<div${_patch_attr($scope0_id, "a", "id", z, $scope0_owned, 0)}>${_patch_text($scope0_id, "b", x, void 0, 0, 0)} ${_patch_text($scope0_id, "c", y, 2, 0, 0)} ${_patch_text($scope0_id, "d", z, 2, $scope0_owned, 0)}</div>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
