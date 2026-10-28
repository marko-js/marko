// template.marko
const $catch_content__input_title = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a10", 6, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._, "a1"), 0));
const $catch_content__setup = $catch_content__input_title;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<em><!> <!></em>", "D%c%", $catch_content__setup, $catch_content__$params);
const $count = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
