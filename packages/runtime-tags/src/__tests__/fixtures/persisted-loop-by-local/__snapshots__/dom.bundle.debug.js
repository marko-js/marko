// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, (item) => item.id]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, {
		id: $scope.items?.length + 1,
		label: "b"
	}]);
}));
function $setup($scope) {
	$items($scope, [{
		id: 1,
		label: "a"
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
