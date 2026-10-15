// tags/feed-list.marko
const $for_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$hovered($scope._, $scope.f);
}));
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _or(7, ($scope) => _attr_class_item($scope.a, "hovered", $scope._.f === $scope.f)));
const $for_content__hovered = _resumed.b6 = /*@__PURE__*/ _for_closure(0, $for_content__hovered__OR__item_id);
const $hovered = /*@__PURE__*/ _fill_let("b4", 5, $for_content__hovered);

// template.marko
const $open = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => _text($scope.b, $scope.h ? "open" : "closed"));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));
