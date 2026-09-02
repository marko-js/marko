// template.marko
const $if_content__input_detail = /*@__PURE__*/ _fill_join_closure("a0", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), 1);
const $catch_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_detail);
const $catch_content__input_detail = /*@__PURE__*/ _fill_join_closure("a0", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $catch_content__if($scope, $scope._.f ? 0 : 1)), 0);
const $catch_content = _content_resume("a3", "<!><!><!>", "b%", $catch_content__input_detail);
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
