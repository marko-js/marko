// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<li> </li>";
const $for_content__$params = ($scope, $params3) => $Row_content__item($scope.a, $params3[0]);
const $Row_content__item = ($scope, item) => _text($scope.a, item);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, $Row_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks), 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.d, $scope.d.length + 1]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.d.slice(1));
	});
});
