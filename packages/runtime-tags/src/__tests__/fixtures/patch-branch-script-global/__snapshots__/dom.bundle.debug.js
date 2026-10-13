// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $if_content__$global_brand__script = _fill_global_script("__tests__/template.marko_1_$global_brand#1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
_fill_global_join_resume("brand", "__tests__/template.marko_1_$global_brand#1/global", $if_content__$global_brand__script);
const $if_content__$global_brand = _shell_join("__tests__/template.marko_1_$global_brand#1/init", /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_1_$global_brand#1/global", $if_content__$global_brand__script));
const $if_content__setup = ($scope) => $if_content__$global_brand($scope);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#6/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
function $setup($scope) {
	$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
