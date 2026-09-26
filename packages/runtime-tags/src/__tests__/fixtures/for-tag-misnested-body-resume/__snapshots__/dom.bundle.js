// template.marko
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<div> </div>", "D ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e]));
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, +$scope.f + 1);
	});
	_on($scope.d, "click", function() {
		$list($scope, []);
	});
});
