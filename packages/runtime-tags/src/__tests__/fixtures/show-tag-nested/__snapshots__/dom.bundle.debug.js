// template.marko
const $template = "<button id=o>outer</button><button id=i>inner</button><!>before <!><em>nested</em><!> after<!><!>";
const $walks = " b b%c%c%c%c";
const $show2 = /* @__PURE__ */ _show("#text/5", "#text/2");
const $outer__script = _script("__tests__/template.marko_0_outer", ($scope) => _on($scope["#button/0"], "click", function() {
	$outer($scope, !$scope.outer);
}));
const $outer = /* @__PURE__ */ _let("outer/6", ($scope) => {
	$show2($scope, $scope.outer);
	$outer__script($scope);
});
const $show = /* @__PURE__ */ _show("#text/4", "#text/3");
const $inner__script = _script("__tests__/template.marko_0_inner", ($scope) => _on($scope["#button/1"], "click", function() {
	$inner($scope, !$scope.inner);
}));
const $inner = /* @__PURE__ */ _let("inner/7", ($scope) => {
	$show($scope, $scope.inner);
	$inner__script($scope);
});
function $setup($scope) {
	$outer($scope, true);
	$inner($scope, false);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
