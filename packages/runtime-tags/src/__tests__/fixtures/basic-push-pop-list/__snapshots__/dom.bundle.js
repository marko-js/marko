// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $id = /* @__PURE__ */ _let(3);
const $for = /* @__PURE__ */ _for_of(0, " ", " b", 0, $for_content__$params);
const $items = /* @__PURE__ */ _let(4, ($scope) => $for($scope, [$scope.e]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		const nextId = $scope.d + 1;
		$id($scope, nextId);
		$items($scope, [...$scope.e, nextId]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.e.slice(0, -1));
	});
});
