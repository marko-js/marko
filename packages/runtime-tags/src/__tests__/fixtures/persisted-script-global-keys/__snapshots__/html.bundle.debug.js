// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_brand#2_$global_locale#3;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global$1.other)}</h1></main>`);
	_global_subscribe("__tests__/template.marko_0_$global_other#1/global", $scope0_id);
	_global_subscribe("__tests__/template.marko_0_$global_brand#2_$global_locale#3/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0_$global_brand#2_$global_locale#3");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
