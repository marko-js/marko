// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 0, 0, $wg__input_mode__OR__input_label, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	_patch_write($scope0_id, "wd", input.mode, 1);
	_patch_write($scope0_id, "we", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.mode,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va0", input.mode, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
