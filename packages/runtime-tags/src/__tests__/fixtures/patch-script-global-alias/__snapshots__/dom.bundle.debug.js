// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $brand__script = _script("__tests__/template.marko_0_brand#1", ($scope) => document.querySelector("main").dataset.brand = $scope.brand);
const $brand = /*@__PURE__*/ _const("brand", ($scope) => {
	$brand__script($scope);
	_text($scope["#text/0"], $scope.brand);
});
const $global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_0_$global_brand#2/global", ($scope, $global_brand) => $brand($scope, $scope.$global.brand));
function $setup($scope) {
	$global_brand($scope, $scope.$global.brand);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
