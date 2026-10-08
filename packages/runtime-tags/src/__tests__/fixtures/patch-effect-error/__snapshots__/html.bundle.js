// template.marko
_shells({ a: "a !a0 a1;D l D ;<p> </p><button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p><button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_effect($scope0_id, "a1", "f");
	_patch_value($scope0_id, "a2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: count
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "f", input.label);
}, 1);
