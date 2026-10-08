// template.marko
_shells({ a: "a !a0;Db Db%;<main><h1>Static title</h1><button>Count <!></button></main>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>Static title</h1><button>Count ${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", count, 1);
	$scope0_page && _scope($scope0_id, { c: count });
}, 1);
