// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 1, 0, 0, $wg__input_mode__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_mode#3_input_label#4/setup", [$fg__input_mode && "input_mode", $fg__input_label && "input_label"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_mode: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.mode,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"]
	}) || ($fg__input_mode && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_mode", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
