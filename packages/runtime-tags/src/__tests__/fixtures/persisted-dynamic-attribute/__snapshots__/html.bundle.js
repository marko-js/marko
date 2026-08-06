// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "a", "href", input.href, $scope0_owned, 0)}${_patch_attr($scope0_id, "a", "title", input.title, $scope0_owned, 1)}${_patch_attr($scope0_id, "a", "hidden", input.hidden, $scope0_owned, 2)}>${_patch_text($scope0_id, "b", input.label, $scope0_owned, 3)}${_el_resume($scope0_id, "b")}</a>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
