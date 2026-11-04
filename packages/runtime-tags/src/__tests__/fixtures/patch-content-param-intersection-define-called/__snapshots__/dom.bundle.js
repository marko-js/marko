// template.marko
const $Box_content__walks = "D l";
const $Box_content__template = "<p> </p>";
const $Box_content__input_a__OR__x = /*@__PURE__*/ _or_patch("a1", 4, ($scope) => _text($scope.a, $scope._.f + $scope.d));
const $Box_content__input_a = /*@__PURE__*/ _closure_get_patch("a2", 10, $Box_content__input_a__OR__x, 0, "a4", 0);
const $Box_content__setup = $Box_content__input_a;
const $Box_content__x = /*@__PURE__*/ _const(3, $Box_content__input_a__OR__x);
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__x($scope, $temp.x);
const $Box_content = _content$1("a0", $Box_content__template, $Box_content__walks, $Box_content__setup, $Box_content__$params);
const $n = _let(7, ($scope) => $Box_content__x($scope.a, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
