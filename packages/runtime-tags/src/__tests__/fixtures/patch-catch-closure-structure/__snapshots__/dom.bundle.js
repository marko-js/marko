// template.marko
const $if_content__input_detail__script = _script("a2", ($scope) => console.log("detail", $scope._._.f));
const $if_content__input_detail = /*@__PURE__*/ _fill_join_closure("a10", 5, _shell_subscribe_closure_get("a3", 8, ($scope) => {
	$if_content__input_detail__script($scope);
	_text($scope.a, $scope._._.f);
}, ($scope) => $scope._._, "a4"), 1);
const $catch_content__if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content__input_detail);
const $catch_content__input_detail = /*@__PURE__*/ _fill_join_closure("a10", 5, _closure_get(8, ($scope) => $catch_content__if($scope, $scope._.f ? 0 : 1), 0, "a5"), 0);
const $catch_content__setup = $catch_content__input_detail;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a8", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $count = /*@__PURE__*/ _fill_let("a11", 7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a9", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
