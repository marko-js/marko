// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _fill_global_join("other", "__tests__/template.marko_0_$global_other#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.other);
});
const $global2__script = _fill_global_script("__tests__/template.marko_0_$global#1", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
_fill_global_join_resume("", "__tests__/template.marko_0_$global#1/global", $global2__script);
const $global2 = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_0_$global#1/global", ($scope) => {
	$global2__script($scope);
	$global_other($scope, $scope.$global?.other);
});
function $setup($scope) {
	$global2($scope);
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
