// template.marko
const $template = "<button>outer</button><button>inner</button><section><!><p>body</p><!></section>";
const $walks = " b b D%c%l";
const $show2 = /*@__PURE__*/ _show("#section/2");
const $outer = /*@__PURE__*/ _let("outer/5", ($scope) => $show2($scope, $scope.outer));
const $show = /*@__PURE__*/ _show("#text/4", "#text/3");
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
	$inner($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
