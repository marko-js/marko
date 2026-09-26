// template.marko
const $template = "<button class=prepend></button><!><!>";
const $walks = " b%c";
const $for_content__m__OR__active = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.m + ":" + $scope.active));
const $for_content__active = /*@__PURE__*/ _const("active", $for_content__m__OR__active);
const $for_content__selected = /*@__PURE__*/ _for_selector("#text/1", "selected", "#LoopKey", ($scope) => $for_content__active($scope, $scope._.selected === $scope["#LoopKey"]));
const $for_content__m = /*@__PURE__*/ _let("m/4", $for_content__m__OR__active);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__m($scope, +$scope.m + 1);
	$selected($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_attr_class($scope["#button/0"], "row" + $scope["#LoopKey"]);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/1", "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, (x) => x]));
const $selected = /*@__PURE__*/ _let("selected/3", $for_content__selected);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [0, ...$scope.items]);
}));
function $setup($scope) {
	$items($scope, [1, 2]);
	$selected($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
