// template.marko
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_mode__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_mode = _unfilled_if($scope0_reason, 1), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 1, 0, 0, $wg__input_mode__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "a0", (($fg__input_mode ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_label || $ui__input_mode__OR__input_label) && input.mode,
		e: ($ui__input_mode || $ui__input_mode__OR__input_label) && input.label
	}) || ($fg__input_mode && $ui__input_label && _patch_write($scope0_id, "xd", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_mode && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
