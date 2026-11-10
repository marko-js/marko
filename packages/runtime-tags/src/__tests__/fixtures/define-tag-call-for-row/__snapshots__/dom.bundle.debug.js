// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<li> </li>";
const $template = "<ul></ul><button id=add>Add</button><button id=remove>Remove</button>";
const $walks = " b b b";
const $for_content__$params = ($scope, $params3) => $Row_content__item($scope["#childScope/0"], $params3[0]);
const $Row_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__item($scope, $temp.item);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", $Row_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks), 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items, $scope.items.length + 1]);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.slice(1));
	});
});
function $setup($scope) {
	$items($scope, [1, 2]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
