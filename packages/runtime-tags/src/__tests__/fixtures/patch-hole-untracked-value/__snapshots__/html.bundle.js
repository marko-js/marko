// template.marko
let n = 0;
function random() {
	return ++n / 10;
}
_shells({ a: "a;D ;<a href=\"/\"> </a>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_patch_text($scope0_id, "a", random(), void 0, 0, 0)}</a>`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
