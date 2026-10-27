// template.marko
_shells({ a: "a !; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
	const act = _action($scope0_id, "a1");
	_html(`<button>${_patch_text($scope0_id, "b", input.x, void 0, $scope0_reason, 0)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {
		e: input.x,
		f: act,
		g: _bind_resume(() => {
			document.title = String(input.x);
		}, "a0", $scope0_id) || void 0
	});
}, 1);
