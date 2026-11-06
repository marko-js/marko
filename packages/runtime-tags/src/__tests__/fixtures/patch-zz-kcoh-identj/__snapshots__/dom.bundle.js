// tags/cmp.marko
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $x__OR__y = /*@__PURE__*/ _or(9, ($scope) => _text($scope.a, $scope.h === $scope.i ? "same" : "diff"));
const $x = _fill_let("c0", 7, ($scope) => {
	$dynamicTag$1($scope, $scope.h);
	$x__OR__y($scope);
});
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $y = _fill_let("c1", 8, ($scope) => {
	$dynamicTag2($scope, $scope.i);
	$x__OR__y($scope);
});

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => _text($scope.b, $scope._._._.e), ($scope) => $scope._._._, "a5", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._._.e);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("a0", "<b> </b>", " D ", $Inner_content__setup);
