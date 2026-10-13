// template.marko
_shells({ a: "a !;E l ;<main><em> </em><button>set</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.foo;
	let count = 0;
	_html(`<main><em>${_text_resume($scope0_id, "a", count)}</em><button>set</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", x, 1);
	_patch_value($scope0_id, "va2", count, 1);
	$scope0_page && _scope($scope0_id, { g: x?.length });
}, 1);
