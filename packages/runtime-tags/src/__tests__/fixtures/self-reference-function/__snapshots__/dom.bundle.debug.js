// template.marko
const $template = "<button></button><div> </div>";
const $walks = " bD l";
const $sum = /*@__PURE__*/ _const("sum", ($scope) => _text($scope, "#text/1", $scope.sum()));
const $items__OR__sum = ($scope) => {
	$sum($scope, (i = 0) => i >= $scope.items?.length ? 0 : $scope.items[i] + $scope.sum(i + 1));
};
const $items = /*@__PURE__*/ _let("items/2", $items__OR__sum);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, $scope.items?.length]);
}));
function $setup($scope) {
	$items($scope, [
		0,
		1,
		2
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
