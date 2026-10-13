// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_brand__script = _fill_global_script("__tests__/template.marko_0_$global_brand#2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
_fill_global_join_resume("brand", "__tests__/template.marko_0_$global_brand#2/global", $global_brand__script);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#2/global", ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup($scope) {
	$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
