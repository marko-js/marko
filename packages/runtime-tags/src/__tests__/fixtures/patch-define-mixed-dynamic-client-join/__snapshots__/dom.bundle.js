// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
const $Panel_content__input_title__OR__value = /*@__PURE__*/ _fill_join_subscribers("a5", 5, /*@__PURE__*/ _or_resume("a1", 4, ($scope) => _text($scope.a, $scope.d + $scope._.f)), 10, 0);
const $Panel_content__input_title = /*@__PURE__*/ _closure_get(10, $Panel_content__input_title__OR__value, 0, "a2");
const $Panel_content__setup = $Panel_content__input_title;
const $Panel_content__value = /*@__PURE__*/ _const(3, $Panel_content__input_title__OR__value);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__value($scope, $temp.value);
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_dyn__OR__n__OR__Panel = /*@__PURE__*/ _fill_join("a4", 6, /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.g ? $scope.i : null, ($_) => ({ value: $scope.h })), 2));
const $n = /*@__PURE__*/ _let(7, $input_dyn__OR__n__OR__Panel);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
