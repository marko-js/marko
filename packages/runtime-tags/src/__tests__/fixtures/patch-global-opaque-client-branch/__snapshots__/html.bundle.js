// template.marko
_shells({ a: "a !a1; b%;<button>t</button><!><!>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	$global();
	let open = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", open, 1);
	$scope0_page && _scope($scope0_id, { c: open });
}, 1);
