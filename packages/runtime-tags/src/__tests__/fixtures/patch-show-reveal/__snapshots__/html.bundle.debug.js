// template.marko
const $template = "<!><!><p> </p><!><button> </button>";
const $walks = "b%bD l%b D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%bD l%b D ;<!><!><p> </p><!><button> </button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const $show = input.on;
	_show_start($show, 0);
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}</p>`);
	_show_end($scope0_id, "#text/2", $show, 1, 0, 0, 1);
	_patch_show($scope0_id, "#text/2", $show, "#text/2", "#text/0", void 0, $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "#text/4", count)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
