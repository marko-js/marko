// total: 6792 (min) 3154 (brotli)
// template.marko: 198 (min) 150 (brotli)
const $for_content__items__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope._.b.textContent = $scope._.c.join(", ");
	$items($scope._, []);
}));
const $for_content__items = /* @__PURE__ */ _for_closure(0, $for_content__items__script);
const $for_content__setup = $for_content__items;
const $for = /* @__PURE__ */ _for_of(0, "<button>Test</button>", " b", $for_content__setup);
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c]);
	$for_content__items($scope);
});
