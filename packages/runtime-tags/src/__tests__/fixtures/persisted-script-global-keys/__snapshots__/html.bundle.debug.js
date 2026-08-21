// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_brand#2_$global_locale#3;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global$1.other)}${_el_resume($scope0_id, "#text/0")}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_$global_brand#2_$global_locale#3");
	_patch_effect($scope0_id, "__tests__/template.marko_0_$global_brand#2_$global_locale#3", "$global_brand $global_locale");
	$scope0_reason ? writeScope($scope0_id, {
		$global_brand: $global$1?.brand,
		$global_locale: $global$1?.locale
	}, "__tests__/template.marko", 0, {
		$global_brand: ["$global.brand"],
		$global_locale: ["$global.locale"]
	}) : (_patch_write($scope0_id, "$global_brand", $global$1?.brand), _patch_write($scope0_id, "$global_locale", $global$1?.locale));
}, 1, 1);
