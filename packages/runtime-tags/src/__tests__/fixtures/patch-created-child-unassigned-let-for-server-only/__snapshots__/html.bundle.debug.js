// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", item)}</li>`);
		_scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_items#4/fill", items, 1);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_items = _unfilled_if($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, $wg__input_on__OR__input_items, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_on#3_input_items#4/setup", (($fg__input_on ? " input_on" : "") + ($fg__input_items ? " input_items" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_on: $ui__input_on__OR__input_items && input.on,
		input_items: $ui__input_on__OR__input_items && input.items
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_items: ["input.items"]
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 1)), $fg__input_items && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 2)));
}, 1);
