// card-plain.marko
_shells({ b: "b;D ;<span> </span>" });
var card_plain_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// card-live.marko
_shells({ a: "a !a0; D%c%;<button><!> <!></button>" });
var card_live_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "c", n, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", n, 1);
	_scope($scope0_id, { g: n });
});

// template.marko
_shells({ c: "c;D%;<main><!></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_mode__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "plain" ? card_plain_default : card_live_default, { label: input.label }, 1, 0, 0, $wg__input_mode__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "c0", (($fg__input_mode ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $ui__input_mode__OR__input_label && input.mode,
		e: $ui__input_mode__OR__input_label && input.label
	}) || ($fg__input_mode && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
