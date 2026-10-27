// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_mode = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 1, 0, 0, $wg__input_mode__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.mode,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "va0", input.mode, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.mode), _filled_guard($scope0_reason, 2) && $cg__input_mode && _patch_fill($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_mode && _content_withhold(input.label));
}, 1);
