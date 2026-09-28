// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope._.b.textContent = $scope._.c.join(", ");
	$items($scope._, []);
}));
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<button>Test</button>", " ", $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
