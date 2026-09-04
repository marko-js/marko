// template.marko
_shells({ a: "a;E lD ;<div class=card><h1> </h1><p> </p></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><p>${_patch_text($scope0_id, "b", input.body, void 0, $scope0_owned, 1)}</p></div>`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
