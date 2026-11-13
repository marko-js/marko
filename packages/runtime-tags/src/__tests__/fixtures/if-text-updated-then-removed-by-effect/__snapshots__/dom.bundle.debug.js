// template.marko
const $template = "<!><!><button>inc</button>";
const $walks = "b%b b";
const $if_content__n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.n));
const $if_content__setup = $if_content__n;
const $n__script = _script("__tests__/template.marko_0_n#2", ($scope) => {
	if ($scope.n >= 2) $open($scope, false);
});
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$if_content__n($scope);
	$n__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/3", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
