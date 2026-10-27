// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $outer2__script = _script("__tests__/template.marko_0_outer#10", ($scope) => _on($scope["#button/0"], "click", $scope.outer));
const $outer2 = _action("outer/10", "__tests__/template.marko_0_outer#10/action", $outer2__script);
const $d__OR__inner = /*@__PURE__*/ _or(9, ($scope) => $outer2($scope, $outer($scope)));
const $d = /*@__PURE__*/ _draft("d/4", ($scope) => {
	_text($scope["#text/1"], $scope.d);
	$d__OR__inner($scope);
});
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $d($scope, $scope.n));
const $seen = /*@__PURE__*/ _let("seen/6", ($scope) => _text($scope["#text/2"], $scope.seen));
const $inner2 = _action("inner/7", "__tests__/template.marko_0_inner#7/action", $d__OR__inner);
function $setup($scope) {
	$n($scope, 1);
	$seen($scope, "");
	$inner2($scope, $inner);
}
const $outer = ($scope) => function() {
	$scope.inner();
	$d($scope, 4);
	$seen($scope, $scope.d);
};
function $inner() {}
_resumed["__tests__/template.marko_0/outer"] = $outer;
_resumed["__tests__/template.marko_0/inner"] = $inner;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
