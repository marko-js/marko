// template.marko
const $if_content__input_detail__script = _script("a0", ($scope) => console.log("detail", $scope._._.f));
const $if_content__input_detail = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => {
	_text($scope.a, $scope._._.f);
	$if_content__input_detail__script($scope);
}, ($scope) => $scope._._, "a8", 1);
const $catch_content__if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content__input_detail);
const $catch_content__input_detail = /*@__PURE__*/ _closure_get_patch("a5", 8, ($scope) => $catch_content__if($scope, $scope._.f ? 0 : 1), 0, "a8", 0);
const $catch_content__setup = $catch_content__input_detail;
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a4", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $count = _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
