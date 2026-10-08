// template.marko
_shells({ a: "a !a2;D b%;<main><button>t</button><!></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	_source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	let open = false;
	_html(`<main><button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "a4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.name,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a3", input.name);
}, 1);
