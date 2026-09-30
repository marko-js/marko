// template.marko
_shells({ a: "a !a0;b%bD l%b D ;<!><!><p> </p><!><button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const $show = input.on;
	_show_start($show);
	_html(`<p>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</p>`);
	_show_end($scope0_id, "c", $show, 1, _source_guard($scope0_reason, 0), 0, 1);
	_patch_show($scope0_id, "c", $show, 2, 0, void 0, $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { j: count });
}, 1, 0);
