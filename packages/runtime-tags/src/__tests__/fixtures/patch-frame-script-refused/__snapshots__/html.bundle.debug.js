// template.marko
const $template = "<p> </p>";
const $walks = "D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
