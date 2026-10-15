// template.marko
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_msg__OR__input_fail = /*@__PURE__*/ _fill_join_subscribers("a8", 3, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e ? boom($scope._.d) : $scope._.d)), 5, 1);
const $try_content__input_msg = _shell_subscribe_closure_get("a3", 5, $try_content__input_msg__OR__input_fail, 0, "a5");
const $catch_content__err_message__OR__upper = /*@__PURE__*/ _shell_or("a1", 9, ($scope) => _text($scope.e, $scope.h + $scope.i));
const $catch_content__upper = /*@__PURE__*/ _const(8, ($scope) => {
	_text($scope.d, $scope.i);
	$catch_content__err_message__OR__upper($scope);
});
const $catch_content__input_msg = /*@__PURE__*/ _fill_join_closure("a8", 3, _closure_get(5, ($scope) => {
	_attr($scope.a, "title", $scope._.d);
	_text($scope.c, $scope._.d);
	$catch_content__upper($scope, $scope._.d.toUpperCase());
}, 0, "a2"), 0);
const $catch_content__setup = $catch_content__input_msg;
const $catch_content__err_message = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.b, $scope.h);
	$catch_content__err_message__OR__upper($scope);
});
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a7", "<b><!> <!> <!> <!></b>", " D%c%c%c%", $catch_content__setup, $catch_content__$params);
