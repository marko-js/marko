// template.marko
const $template = "<button id=toggle>toggle</button><div><button id=inc>count <!></button></div>";
const $walks = " b D Db%m";
const $show = /* @__PURE__ */ _show("#div/1");
const $open__script = _script("__tests__/template.marko_0_open", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
const $open = /* @__PURE__ */ _let("open/4", ($scope) => {
	$show($scope, $scope.open);
	$open__script($scope);
});
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/5", ($scope) => {
	_text($scope["#text/3"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	$open($scope, true);
	$n($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
