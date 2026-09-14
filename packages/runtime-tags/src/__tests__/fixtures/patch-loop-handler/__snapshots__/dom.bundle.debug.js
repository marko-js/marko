// template.marko
const $template = "<main><ul></ul><button class=add>+</button></main>";
const $walks = "D b l";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope._, $scope._.items.filter((_, j) => j !== $scope["#LoopKey"]));
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> <button>x</button></li>", "D b ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, "n" + $scope.items?.length]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
