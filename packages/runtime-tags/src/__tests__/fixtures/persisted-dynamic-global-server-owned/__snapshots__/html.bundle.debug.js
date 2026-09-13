// card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;D ;<em> </em>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</em>`);
	_global_subscribe("__tests__/card.marko_0_$global_brand#1/global", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
}, 0, 1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_on = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.on ? card_default : null;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_on, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
