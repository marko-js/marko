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
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", on ? card_default : null, {});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1, 1);
