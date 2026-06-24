// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $a__OR__b__script = _script("__tests__/template.marko_0_a_b", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, $scope.a.map((a) => $scope.b));
}));
const $a__OR__b = /*@__PURE__*/ _or(4, $a__OR__b__script);
const $a = /*@__PURE__*/ _let("a/2", ($scope) => {
	_text($scope["#text/1"], $scope.a.join(""));
	$a__OR__b($scope);
});
const $b = /*@__PURE__*/ _let("b/3", $a__OR__b);
function $setup($scope) {
	$a($scope, [0]);
	$b($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
