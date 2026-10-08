// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.mode === "a" ? card_a_default : card_b_default;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $wg__input_mode__OR__input_label, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_patch_write($scope0_id, "d", input.mode, 1);
	_patch_write($scope0_id, "e", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.mode,
		e: _source_if($scope0_reason, 1) && input.label
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a0", input.mode), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a1", input.label));
}, 1);
