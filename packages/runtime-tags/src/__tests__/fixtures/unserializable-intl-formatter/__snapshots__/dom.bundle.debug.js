// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n__OR__fmt = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope.fmt.format($scope.n)));
const $n = /*@__PURE__*/ _let("n/2", $n__OR__fmt);
const $fmt = /*@__PURE__*/ _const("fmt", $n__OR__fmt);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$fmt($scope, new Intl.NumberFormat("en"));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
