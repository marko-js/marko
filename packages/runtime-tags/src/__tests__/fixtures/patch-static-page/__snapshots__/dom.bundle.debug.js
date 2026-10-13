// template.marko
const $template = "<h1>Hello</h1>";
const $walks = "b";
const $global2__script = _fill_global_script("__tests__/template.marko_0_$global#0", ($scope) => $scope.$global.log?.("router"));
_fill_global_join_resume("", "__tests__/template.marko_0_$global#0/global", $global2__script);
const $global2 = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_0_$global#0/global", $global2__script);
function $setup($scope) {
	$global2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b", $setup);
