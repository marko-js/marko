// template.marko
_shells({ a: "a !a1; D l ;<button> </button><p></p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}<p></p>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", "f");
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: clicks
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
