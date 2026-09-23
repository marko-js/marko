// template.marko
_shells({ a: "a !a0;D b D ;<main><div></div><button> </button></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	const $content = input.html === "a" ? frag_a_default : frag_b_default;
	_patch_dynamic_tag($scope0_id, "a", $content, 0, 0, 0, $scope0_reason, 0);
	_attr_content("a", $scope0_id, $content);
	_html(`</div>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { g: count });
}, 1, 0);
