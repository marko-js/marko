// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let xs = input.items;
	_for_of(xs, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "#text/1", input.w, $wg__input_w * 2)}</p>`);
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
	}, (x) => x, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", xs, 1);
	_scope($scope0_id, { input_w: input.w }, "__tests__/tags/card.marko", 0, { input_w: ["input.w"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_items__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {
		items: input.items,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_items__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		input_items: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.items,
		input_w: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_items: ["input.items"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_items__OR__input_w && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_items__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.items, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.items), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_items && _content_withhold(input.w));
}, 1);
