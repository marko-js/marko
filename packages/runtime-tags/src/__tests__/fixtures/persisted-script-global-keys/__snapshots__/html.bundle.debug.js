// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global$1.other)}${_el_resume($scope0_id, "#text/0")}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_effect($scope0_id, "__tests__/template.marko_0", "! brand locale", 1);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
