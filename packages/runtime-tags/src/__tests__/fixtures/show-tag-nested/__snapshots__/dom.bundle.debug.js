// template.marko
const $template = "<button id=o>outer</button><button id=i>inner</button><!>before <em>nested</em><!> after<!><!>";
const $walks = " b b%d%c%c";
const $show2 = /*@__PURE__*/ _show("#text/4", "#text/2");
const $outer = /*@__PURE__*/ _let("outer/5", ($scope) => $show2($scope, $scope.outer));
const $show = /*@__PURE__*/ _show("#text/3");
const $inner = /*@__PURE__*/ _let("inner/6", ($scope) => $show($scope, $scope.inner));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$outer($scope, !$scope.outer);
	});
	_on($scope["#button/1"], "click", function() {
		$inner($scope, !$scope.inner);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$inner($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
