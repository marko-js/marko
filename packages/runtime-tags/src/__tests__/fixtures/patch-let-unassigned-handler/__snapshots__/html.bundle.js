// template.marko
_shells({ a: "a !a0;E l ;<main><em> </em><button>set</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.foo;
	let count = 0;
	_html(`<main><em>${_text_resume($scope0_id, "a", count)}</em><button>set</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wg", x?.length, 1);
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, { g: x?.length });
}, 1);
