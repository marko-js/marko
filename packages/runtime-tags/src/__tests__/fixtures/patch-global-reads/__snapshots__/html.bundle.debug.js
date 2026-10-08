// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_patch_attr($scope0_id, "#h1/0", "title", $global$1.locale)}>${_patch_text($scope0_id, "#text/1", $global$1.brand)}</h1>${_el_resume($scope0_id, "#h1/0")}<p>${_patch_text($scope0_id, "#text/2", input.name, void 0, $scope0_reason, 0)}</p></div>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_locale#7/global", $scope0_id);
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#8/global", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
