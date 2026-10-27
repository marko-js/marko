// tags/badge.marko
_shells({ b: "b;D ;<em> </em>" });
var badge_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "a", $global$1.brand)}</em>`);
	_fill_global_subscribe("b0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { c: open });
}, 1);
