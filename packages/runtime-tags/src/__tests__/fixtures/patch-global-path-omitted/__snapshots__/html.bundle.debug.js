// template.marko
const $template = "<div></div><p> </p>";
const $walks = " bD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_o_x#5; bD ;<div></div><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<p>${_patch_text($scope0_id, "#text/1", $global$1.k)}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_o_x#5", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_k#7", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0_$global_o_x#5");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
