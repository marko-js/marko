// tags/logger.marko
_shells({ b: "b !b1,<div></div>" });
var logger_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	$global();
	_html("<div></div>");
	_fill_global_subscribe("b0", $scope0_id, 1);
	_script($scope0_id, "b1", 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", show, 1);
	$scope0_page && _scope($scope0_id, { c: show });
}, 1);
