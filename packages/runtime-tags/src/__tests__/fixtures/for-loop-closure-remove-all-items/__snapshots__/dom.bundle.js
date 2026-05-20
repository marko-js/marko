// total: 6768 (min) 3145 (brotli)
// template.marko: 190 (min) 143 (brotli)
const $for_content__items = /* @__PURE__ */ _for_closure(0, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope._.b.textContent = $scope._.c.join(", ");
	$items($scope._, []);
})));
const $for = /* @__PURE__ */ _for_of(0, "<button>Test</button>", " b", $for_content__items);
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c]);
	$for_content__items($scope);
});
