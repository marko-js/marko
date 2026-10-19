// template.marko
_shells({ a: "a !a1; D l ;<button> </button><p></p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}<p></p>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0", 1, 1);
	_script($scope0_id, "a1");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, "ea0", "f!0");
	_patch_value($scope0_id, "va2", clicks, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: clicks
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
