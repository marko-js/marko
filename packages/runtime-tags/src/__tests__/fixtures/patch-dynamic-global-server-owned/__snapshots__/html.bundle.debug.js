// card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/card.marko": "__tests__/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</em>`);
	_fill_global_subscribe("__tests__/card.marko_0_$global_brand#4", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : null, {}, 0, 0, $wg__input_on, void 0, 2, $scope0_reason, 0);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
