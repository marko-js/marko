// template.marko
const $template = "<button>+</button><ul></ul>";
const $walks = " b b";
const $for_content__setup__$global_x = /*@__PURE__*/ _fill_global_for("__tests__/template.marko_1_$global_x#0:9", "#ul/1", ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] + ":" + $scope.$global.x), "x");
const $for_content__setup = $for_content__setup__$global_x;
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/1", "<li> </li>", "D ", $for_content__setup);
const $n = _let("n/2", ($scope) => $for($scope, [$scope.n]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
