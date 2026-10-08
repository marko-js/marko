// template.marko
const $template = "<div><h1> </h1><button> </button></div>";
const $walks = "E l D m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l D ;<div><h1> </h1><button> </button></div>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<div><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><button>${_text_resume($scope0_id, "#text/2", clickCount)}</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", clickCount, 1);
	$scope0_page && _scope($scope0_id, { clickCount }, "__tests__/template.marko", 0, { clickCount: "2:8" });
});
