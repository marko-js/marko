// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.mode === "a" ? card_a_default : card_b_default;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $wg__input_mode__OR__input_label, void 0, _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_patch_write($scope0_id, "input_mode", input.mode, 1);
	_patch_write($scope0_id, "input_label", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_mode#3_input_label#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_mode: _source_if($scope0_reason, 2) && input.mode,
		input_label: _source_if($scope0_reason, 1) && input.label
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.mode), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko_fill1", input.label));
}, 1);
