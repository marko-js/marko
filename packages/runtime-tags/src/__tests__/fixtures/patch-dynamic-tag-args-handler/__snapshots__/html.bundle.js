// template.marko
_shells({ a: "a !a1;b%b D ;<!><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.tag, {
		title: input.title,
		onClick: _resume(function() {
			n = input.title.length;
		}, "a0", $scope0_id)
	}, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "wf", input.tag, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a4");
	_patch_value($scope0_id, "va5", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		g: input.title,
		i: n
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va2", input.tag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 2)) : _patch_write($scope0_id, "wg", input.title, !_server_guard($scope0_reason, 2))));
}, 1);
