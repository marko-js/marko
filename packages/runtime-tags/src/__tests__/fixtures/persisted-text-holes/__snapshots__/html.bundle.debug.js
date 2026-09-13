// template.marko
const $template = "<div class=card><h1> </h1><p> </p></div>";
const $walks = "E lD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lD ;<div class=card><h1> </h1><p> </p></div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><p>${_patch_text($scope0_id, "#text/1", input.body, void 0, $scope0_reason, 1)}</p></div>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
