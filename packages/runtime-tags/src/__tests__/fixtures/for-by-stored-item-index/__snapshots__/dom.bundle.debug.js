// template.marko
const $template = "<ul></ul><button id=rotate>rotate</button><span> </span>";
const $walks = " b bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$picked($scope._, $scope.item);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, item, i) => {
	$for_content__item($scope, item);
	_text($scope["#text/1"], i);
};
const $for_content__item = /*@__PURE__*/ _const("item");
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><button> </button></li>", "D D ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items, "id"]));
const $picked = /*@__PURE__*/ _let("picked/4", ($scope) => $picked_name($scope, $scope.picked?.name));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items.slice(1), $scope.items[0]]);
}));
function $setup($scope) {
	$items($scope, [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}]);
	$picked($scope);
	$setup__script($scope);
}
const $picked_name = /*@__PURE__*/ _const("picked_name", ($scope) => _text($scope["#text/2"], $scope.picked_name));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
