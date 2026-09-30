// template.marko
const $template = "<main><h1> </h1><h2> </h2><p> </p></main>";
const $walks = "E lD lD m";
function brandOf(g) {
	return g.brand;
}
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lD lD ;<main><h1> </h1><h2> </h2><p> </p></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const name = brandOf($global$1);
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", brandOf($global$1))}</h1><h2>${_patch_text($scope0_id, "#text/1", name)}</h2><p>${_patch_text($scope0_id, "#text/2", input.name, void 0, $scope0_reason, 0)}</p></main>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
