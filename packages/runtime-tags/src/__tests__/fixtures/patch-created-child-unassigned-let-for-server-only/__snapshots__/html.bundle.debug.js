// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell;D ;<li> </li>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = input.items;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</li>`);
		$scope0_page && _scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/card.marko_1*shell", (_mask_group($scope0_reason, 0) & 1) << 1, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, $wg__input_on__OR__input_items, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_items: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.items
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_items: ["input.items"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_items && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.items, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.items));
}, 1);
