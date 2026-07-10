// template.marko
const $template = "<button id=o>outer</button><button id=i>inner</button><!>before <!><em>nested</em><!> after<!><!>";
const $walks = " b b%c%c%c%c";
const $show2 = /*@__PURE__*/ _show("#text/5", "#text/2");
const $outer = /*@__PURE__*/ _let("outer/6", ($scope) => $show2($scope, "outer" in $scope ? $scope.outer : true));
const $show = /*@__PURE__*/ _show("#text/4", "#text/3");
const $inner = /*@__PURE__*/ _let("inner/7", ($scope) => $show($scope, "inner" in $scope ? $scope.inner : false));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$outer($scope, !("outer" in $scope ? $scope.outer : true));
	});
	_on($scope["#button/1"], "click", function() {
		$inner($scope, !("inner" in $scope ? $scope.inner : false));
	});
});
function $setup($scope) {
	$outer($scope, true);
	$inner($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
