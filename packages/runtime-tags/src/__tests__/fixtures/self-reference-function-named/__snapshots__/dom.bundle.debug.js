// template.marko
const $template = "<button></button><div> </div>";
const $walks = " bD l";
const $items = /*@__PURE__*/ _let("items/2", ($scope) => _text($scope["#text/1"], function sum(i = 0) {
	return i >= $scope.items.length ? 0 : $scope.items[i] + sum(i + 1);
}()));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, $scope.items.length]);
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
