// template.marko
function brandOf(g) {
	return g.brand;
}
_shells({ a: "a;E lD lD ;<main><h1> </h1><h2> </h2><p> </p></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const name = brandOf($global$1);
	_html(`<main><h1>${_patch_text($scope0_id, "a", brandOf($global$1))}</h1><h2>${_patch_text($scope0_id, "b", name)}</h2><p>${_patch_text($scope0_id, "c", input.name, void 0, $scope0_reason, 0)}</p></main>`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 1);
