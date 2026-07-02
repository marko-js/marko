// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $a__OR__b = /* @__PURE__ */ _or(4, ($scope) => _text($scope["#text/1"], $scope.a + $scope.b));
const $a = /* @__PURE__ */ _let("a/2", $a__OR__b);
const $b = /* @__PURE__ */ _let("b/3", $a__OR__b);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, $scope.a + 1);
	$b($scope, $scope.b + 1);
}));
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
