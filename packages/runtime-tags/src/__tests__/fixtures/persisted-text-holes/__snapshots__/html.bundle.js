// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "a", input.title)}${_el_resume($scope0_id, "a")}</h1><p>${_patch_text($scope0_id, "b", input.body)}${_el_resume($scope0_id, "b")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
