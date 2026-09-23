// template.marko
const $template = "<main><div></div><button> </button></main>";
const $walks = "D b D m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b D ;<main><div></div><button> </button></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	const $content = input.html === "a" ? frag_a_default : frag_b_default;
	_patch_dynamic_tag($scope0_id, "#div/0", $content, 0, 0, 0, $scope0_reason, 0);
	_attr_content("#div/0", $scope0_id, $content);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
}, 1, 0);
