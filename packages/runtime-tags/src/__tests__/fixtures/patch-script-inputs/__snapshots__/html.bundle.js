// template.marko
_shells({ a: "a;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1></main>`);
	_script($scope0_id, "a0", 1, 1);
	(_filled_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 3)) && _patch_effect($scope0_id, "ea0", "e f");
	$scope0_page ? _scope($scope0_id, {
		e: input.a,
		f: input.b
	}) : (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "we", input.a, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "wf", input.b, !_server_guard($scope0_reason, 3)));
}, 1);
