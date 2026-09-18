// template.marko
_shells({ a: "a !a0; D ;<button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const _pageSource = input.page;
	let page = _pageSource;
	_html(`<button>${_text_resume($scope0_id, "b", page)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: _pageSource,
		g: page
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", _pageSource);
}, 1, 0);
