// template.marko
_shells({ a: "a !a1; D l ;<button> </button><div></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n + input.label)}</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0", 1, 1);
	_script($scope0_id, "a1");
	_server_guard($scope0_reason, 2) && _patch_effect($scope0_id, "ha0", "g");
	_patch_value($scope0_id, "va3", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: input.other,
		i: n
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "wg", input.other, !_server_guard($scope0_reason, 2)));
}, 1);
