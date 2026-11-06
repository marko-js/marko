// template.marko
const $template = "<p></p><button>inc</button>";
const $walks = " b b";
const $for_content__n = /*@__PURE__*/ _for_closure("#p/0", ($scope) => _text($scope["#text/0"], $scope._.n), 3);
const $for_content__setup = $for_content__n;
const $n = /*@__PURE__*/ _let("n/2", $for_content__n);
const $for = /*@__PURE__*/ _for_of_unkeyed("#p/0", "<!> x", "%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
