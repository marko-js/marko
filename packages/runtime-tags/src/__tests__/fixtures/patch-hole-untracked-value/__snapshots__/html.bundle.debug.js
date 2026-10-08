// template.marko
const $template = "<a href=\"/\"> </a>";
const $walks = "D l";
let n = 0;
function random() {
	return ++n / 10;
}
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<a href=\"/\"> </a>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_patch_text($scope0_id, "#text/0", random(), void 0, 0, 0)}</a>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
