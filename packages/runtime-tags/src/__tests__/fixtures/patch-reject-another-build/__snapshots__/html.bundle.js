// template.marko
_shells({ a: "a !a0;D l D ;<h1> </h1><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
}, 1);
