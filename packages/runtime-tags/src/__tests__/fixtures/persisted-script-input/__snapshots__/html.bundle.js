// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1></main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "e");
	$scope0_reason ? writeScope($scope0_id, { e: input.announce }) : _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "e", input.announce);
}, 1);
