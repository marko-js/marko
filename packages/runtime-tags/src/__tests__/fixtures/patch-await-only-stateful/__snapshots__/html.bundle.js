// template.marko
_shells({ a: "a !a0; b%bD ;<button>toggle</button><!><p> </p>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_html(`<p>${_patch_text($scope0_id, "c", input.title, void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", open, 1);
	$scope0_page && _scope($scope0_id, { g: open });
}, 1);
