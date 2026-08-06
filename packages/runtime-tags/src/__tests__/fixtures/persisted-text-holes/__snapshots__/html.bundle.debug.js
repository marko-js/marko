// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><p>${_patch_text($scope0_id, "#text/1", input.body, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
