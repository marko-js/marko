// template.marko
const $template = "<button>next</button><p><!></p>";
const $walks = " b D%l";
const $if = /*@__PURE__*/ _if("#text/2", "zero");
const $show = /*@__PURE__*/ _show("#p/1");
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	$if($scope, $scope.n === 0 ? 0 : 1);
	$show($scope, $scope.n !== 2);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, ($scope.n + 1) % 3);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
