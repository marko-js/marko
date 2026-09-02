// template.marko
_shells({ a: "a;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_patch_attr($scope0_id, "a", "title", $global$1.locale)}>${_patch_text($scope0_id, "b", $global$1.brand)}</h1>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "c", input.name, void 0, $scope0_owned, 0)}</p></div>`);
	_global_subscribe("a0", $scope0_id);
	_global_subscribe("a1", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 1);
