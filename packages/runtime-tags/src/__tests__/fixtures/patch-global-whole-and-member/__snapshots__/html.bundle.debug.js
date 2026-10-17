// template.marko
const $template = "<main><p> </p></main><button> </button>";
const $walks = " E m D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_$global#5; E m D ;<main><p> </p></main><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<main><p>${_patch_text($scope0_id, "#text/1", $global$1.data.title)}</p></main>${_el_resume($scope0_id, "#main/0")}<button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_fill_global_subscribe("__tests__/template.marko_0_$global#5", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_data_title#7", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_$global#5");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
