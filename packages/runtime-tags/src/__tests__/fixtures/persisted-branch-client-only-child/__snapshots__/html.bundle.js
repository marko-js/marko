// template.marko
_shells({ a: "a !a0;D bD l ;<main><div></div><span> </span><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main><div>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<span>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</span><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		h: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
