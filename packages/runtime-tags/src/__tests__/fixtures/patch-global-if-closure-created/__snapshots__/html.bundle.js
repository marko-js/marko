// tags/badge.marko
_shells({ b: "b !b1; b%;<button class=b>o</button><!><!>" });
var badge_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	$global();
	let open = false;
	_html(`<button class=b>o</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b2", open, 1);
	$scope0_page && _scope($scope0_id, { c: open });
});

// template.marko
_shells({ a: "a !a0; b%;<button class=a>s</button><!><!>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=a>s</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", show, 1);
	$scope0_page && _scope($scope0_id, { c: show });
}, 1);
