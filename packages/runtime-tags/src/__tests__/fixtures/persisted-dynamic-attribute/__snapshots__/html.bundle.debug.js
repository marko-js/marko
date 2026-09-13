// template.marko
const $template = "<a> </a>";
const $walks = " D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko; D ;<a> </a>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "#a/0", "href", input.href, $scope0_reason, 0)}${_patch_attr($scope0_id, "#a/0", "title", input.title, $scope0_reason, 1)}${_patch_attr($scope0_id, "#a/0", "hidden", input.hidden, $scope0_reason, 2)}>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 3)}</a>${_el_resume($scope0_id, "#a/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
