// template.marko
const $template = "<main><h1> </h1><a> </a></main>";
const $walks = "E l D m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;E l D ;<main><h1> </h1><a> </a></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", `a&b${input.name}<c`, void 0, $scope0_reason, 0)}</h1><a${_patch_attr($scope0_id, "#a/1", "title", input.on ? "a\"b" : "c'd", $scope0_reason, 1)}${_patch_attr($scope0_id, "#a/1", "data-x", input.flag && "on", $scope0_reason, 2)}>${_patch_text($scope0_id, "#text/2", input.name, void 0, $scope0_reason, 0)}</a>${_el_resume($scope0_id, "#a/1")}</main>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
