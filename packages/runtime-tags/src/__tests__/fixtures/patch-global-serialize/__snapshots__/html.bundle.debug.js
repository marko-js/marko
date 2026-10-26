// template.marko
const $template = "<button> </button><pre></pre>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0_$global#5", "__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global#5 __tests__/template.marko_0; D l ;<button> </button><pre></pre>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count + $global$1.brand)}</button>${_el_resume($scope0_id, "#button/0")}<pre></pre>${_el_resume($scope0_id, "#pre/2")}`);
	_fill_global_subscribe("__tests__/template.marko_0_count#3_$global_brand#6", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0_$global#5");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
