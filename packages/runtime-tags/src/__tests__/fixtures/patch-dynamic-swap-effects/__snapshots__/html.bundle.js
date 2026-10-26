// card-plain.marko
_shells({ b: "b;D ;<span> </span>" });
var card_plain_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {});
});

// card-live.marko
_shells({ a: "a !a0; D%c%;<button><!> <!></button>" });
var card_live_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, { g: n });
});

// template.marko
_shells({ c: "c !;D%;<main><!></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_mode = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "plain" ? card_plain_default : card_live_default, { label: input.label }, 0, 0, $wg__input_mode__OR__input_label, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.mode,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "vc0", input.mode, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.mode), _filled_guard($scope0_reason, 2) && $cg__input_mode && _patch_fill($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_mode && _content_withhold(input.label));
}, 1);
