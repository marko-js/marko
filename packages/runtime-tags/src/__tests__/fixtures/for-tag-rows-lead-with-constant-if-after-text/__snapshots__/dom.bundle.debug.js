// template.marko
const $template = "<p>x<!></p><button>inc</button>";
const $walks = "Db%l b";
const $else_content__n = /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._._.n), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:2/subscribe");
const $else_content__setup = $else_content__n;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<b></b>", 0, 0, " ", " ", $else_content__setup);
const $for_content__setup = ($scope) => $for_content__if($scope, false ? 0 : 1);
const $n__closure = /*@__PURE__*/ _closure($else_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
