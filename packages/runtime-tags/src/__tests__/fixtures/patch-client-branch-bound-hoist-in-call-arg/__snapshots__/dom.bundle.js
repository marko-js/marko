// tags/setter.marko
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$scope.d[0]().id = "set";
}));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__el_getter = _hoist_resume("a0", 1);
