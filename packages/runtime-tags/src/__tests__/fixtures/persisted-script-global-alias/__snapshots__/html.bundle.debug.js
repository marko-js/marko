// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_brand#1;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const brand = $global$1.brand;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", brand)}</h1></main>`);
	_global_subscribe("__tests__/template.marko_0_$global_brand#2/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0_brand#1");
	_patch_effect($scope0_id, "__tests__/template.marko_0_brand#1", "brand");
	$scope0_reason ? _scope($scope0_id, { brand }, "__tests__/template.marko", 0, { brand: "1:8" }) : _patch_write($scope0_id, "brand", brand);
}, 1, 1);
