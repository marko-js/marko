// template.marko
_shells({ a: "a !a0;E l D ;<div><h1> </h1><button> </button></div>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<div><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><button>${_text_resume($scope0_id, "c", clickCount)}</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", clickCount, 1);
	$scope0_page && _scope($scope0_id, { g: clickCount });
});
