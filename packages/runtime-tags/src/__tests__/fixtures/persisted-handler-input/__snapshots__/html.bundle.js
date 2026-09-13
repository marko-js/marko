// template.marko
_shells({ a: "a !a0;E l ;<main><h1> </h1><button>read</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><button>read</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, { e: input.title }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.title);
}, 1, 0);
