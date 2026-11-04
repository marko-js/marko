// tags/panel.marko
const $if_content__count__OR__a = /*@__PURE__*/ _or_patch("b2", 4, ($scope) => _text($scope.a, $scope.d + $scope._.h));
const $if_content__a__OR__b = /*@__PURE__*/ _or_patch("b4", 7, ($scope) => _text($scope.c, $scope.d + $scope.f));
const $if_content__a = /*@__PURE__*/ _const(3, ($scope) => {
	$if_content__count__OR__a($scope);
	$if_content__a__OR__b($scope);
});
const $if_content__input_x = /*@__PURE__*/ _if_closure_patch("b0", 0, 0, ($scope) => $if_content__a($scope, $scope._.f + "a"));
const $if_content__count__OR__b = /*@__PURE__*/ _or_patch("b3", 6, ($scope) => _text($scope.b, $scope.f + $scope._.h));
const $if_content__b = /*@__PURE__*/ _const(5, ($scope) => {
	$if_content__count__OR__b($scope);
	$if_content__a__OR__b($scope);
});
const $if_content__input_y = /*@__PURE__*/ _if_closure_patch("b1", 0, 0, ($scope) => $if_content__b($scope, $scope._.g + "b"));
const $if_content__count = /*@__PURE__*/ _if_closure_patch("b9", 0, 0, ($scope) => {
	$if_content__count__OR__a($scope);
	$if_content__count__OR__b($scope);
});
const $count = /*@__PURE__*/ _fill_let("b7", 7, $if_content__count);
const $setup__script$1 = _script("b6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
const $input_x = /*@__PURE__*/ _const(5, $if_content__input_x);
const $input_y = /*@__PURE__*/ _const(6, $if_content__input_y);

// template.marko
const $y = _let(7, ($scope) => {
	$input_y($scope.a, $scope.h);
	$input_x($scope.b, $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$y($scope, $scope.h + "!");
}));
