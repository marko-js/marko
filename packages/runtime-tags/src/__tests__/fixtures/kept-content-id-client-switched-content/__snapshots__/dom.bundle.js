// tags/card.marko
const $Other_content = _content("b0", "<b>other</b>");
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.g);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = /*@__PURE__*/ _let(7, ($scope) => {
	$dynamicTag($scope, $scope.h);
	$dynamicTag2($scope, $scope.h);
});
