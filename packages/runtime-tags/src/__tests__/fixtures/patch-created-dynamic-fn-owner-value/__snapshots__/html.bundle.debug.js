// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : () => "-";
	_html(`<button>${_text_resume($scope0_id, "#text/1", g())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_fn: input.fn,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $sg__input_label = _server_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 2) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !$sg__input_label) : _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label)), $cg__input_show && _content_withhold(input.label);
	_dynamic_tag($scope0_id, "#text/0", input.show && card_default, { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "__tests__/template.marko_0/fn", $scope0_id) }, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.show));
}, 1);
