// template.marko
const $template = "<!><!><button>add</button>";
const $walks = "b%b b";
const $for_content__if = /*@__PURE__*/ _if("#text/0", "big", 0, 0, "<section></section>");
const $for_content__setup = ($scope) => $for_content__if($scope, $scope["#LoopKey"] > 9 ? 0 : 1);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, { id: $scope.items.length + 1 }]);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
