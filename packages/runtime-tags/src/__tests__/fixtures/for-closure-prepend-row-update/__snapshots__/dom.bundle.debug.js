// template.marko
const $template = "<button class=prepend></button><!><!>";
const $walks = " b%c";
const $for_content__m__OR__label = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/1"], $scope.m + ":" + $scope.label));
const $for_content__label = /*@__PURE__*/ _const("label", $for_content__m__OR__label);
const $for_content__n = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__label($scope, "n" + $scope._.n));
const $for_content__m = /*@__PURE__*/ _let("m/3", $for_content__m__OR__label);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__m($scope, +$scope.m + 1);
	$n($scope._, +$scope._.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	_attr_class($scope["#button/0"], "row" + $scope["#LoopKey"]);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/1", "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, (x) => x]));
const $n = /*@__PURE__*/ _let("n/3", $for_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [0, ...$scope.items]);
}));
function $setup($scope) {
	$items($scope, [1, 2]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
