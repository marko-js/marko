// template.marko
const $for = /* @__PURE__ */ _for_of(0, "<button>Test</button>", " b", _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope._.b.textContent = $scope._.c.join(", ");
	$items($scope._, []);
})));
const $items = /* @__PURE__ */ _let(2, ($scope) => $for($scope, [$scope.c]));
